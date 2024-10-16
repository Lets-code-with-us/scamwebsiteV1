require('dotenv').config(); // Load environment variables from .env
const { MongoClient } = require('mongodb');

// Environment variables
const primaryDatabaseUri = process.env.PRIMARY_DB_URI;
const primaryDatabaseName = process.env.PRIMARY_DB_NAME;
const backupRetentionLimit = parseInt(process.env.BACKUP_RETENTION_LIMIT) || 2; // Number of backups to keep
const backupTimestampField =
  process.env.BACKUP_TIMESTAMP_FIELD || 'backupTimestamp';

// Generate a unique database name based on the current timestamp
const getBackupDatabaseName = () =>
  `${primaryDatabaseName}_backup_${new Date().toISOString().replace(/[-:T]/g, '').split('.')[0]}`; // Format: YYYYMMDDHHMMSS

// Delete excess backup databases
async function deleteOldBackups(client) {
  const backups = (await client.db().admin().listDatabases()).databases
    .filter((db) => db.name.startsWith(`${primaryDatabaseName}_backup_`))
    .sort((a, b) => a.name.localeCompare(b.name));

  while (backups.length > backupRetentionLimit) {
    const dbToDelete = backups.shift();
    if (dbToDelete) {
      console.log(`Deleting old backup database: ${dbToDelete.name}`);
      await client.db(dbToDelete.name).dropDatabase();
    }
  }
}

// Copy documents from the primary to the backup database
async function copyDocuments(sourceCollection, destinationCollection, session) {
  let lastDocumentId = null;

  while (true) {
    const query = lastDocumentId ? { _id: { $gt: lastDocumentId } } : {};
    const documentsBatch = await sourceCollection
      .find(query)
      .limit(1000)
      .toArray(); // Using default batch size

    if (documentsBatch.length === 0) break;

    // Add backup timestamp to each document
    const documentsWithTimestamp = documentsBatch.map((doc) => ({
      ...doc,
      [backupTimestampField]: new Date(),
    }));
    await destinationCollection.insertMany(documentsWithTimestamp, { session });
    lastDocumentId = documentsBatch[documentsBatch.length - 1]._id;
  }
}

// Perform the database backup
async function backupDatabase() {
  const primaryClient = new MongoClient(primaryDatabaseUri);

  try {
    await primaryClient.connect();
    const backupDbName = getBackupDatabaseName();
    const backupClient = new MongoClient(primaryDatabaseUri);
    await backupClient.connect();

    console.log(`Creating backup database: ${backupDbName}`);
    const backupDb = backupClient.db(backupDbName);
    const primaryDb = primaryClient.db(primaryDatabaseName);
    const session = primaryClient.startSession();
    session.startTransaction();

    for (const collection of await primaryDb.collections()) {
      const collectionName = collection.collectionName;
      console.log(`Backing up collection: ${collectionName}`);
      await backupDb.collection(collectionName).deleteMany({}, { session }); // Clear existing documents
      await copyDocuments(
        primaryDb.collection(collectionName),
        backupDb.collection(collectionName),
        session
      );
      console.log(`Successfully backed up ${collectionName} collection.`);
    }

    await session.commitTransaction();
    console.log('Database backup completed successfully!');
    await deleteOldBackups(primaryClient);
  } catch (error) {
    console.error('Error during backup:', error);
  } finally {
    await primaryClient.close();
  }
}

// Start backup when the script runs
if (require.main === module) {
  backupDatabase();
}
