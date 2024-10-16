const { MongoClient } = require('mongodb');

const primaryDbUri = 'mongodb://user:password@primary_db_host:port/database_name';
const secondaryDbUri = 'mongodb://user:password@secondary_db_host:port/database_name';

async function backupDatabase() {
  try {
    // Connect to primary database
    const primaryClient = new MongoClient(primaryDbUri);
    await primaryClient.connect();
    const primaryDb = primaryClient.db('database_name');

    // Connect to secondary database
    const secondaryClient = new MongoClient(secondaryDbUri);
    await secondaryClient.connect();
    const secondaryDb = secondaryClient.db('database_name');

    
    const collections = await primaryDb.collections();

    // Loop through each collection and perform backup
    for (const collection of collections) {
      
      const collectionName = collection.collectionName;
      const documents = await collection.find({}).toArray();
      await secondaryDb.collection(collectionName).insertMany(documents);

      console.log(`Backed up collection ${collectionName} to secondary database`);
    }

    // Close connections
    await primaryClient.close();
    await secondaryClient.close();

    console.log('Database backup completed successfully!');
  } catch (error) {
    console.error('Error backing up database:', error);
  }
}

// Schedule the backup job to run every month
const cron = require('node-cron');

cron.schedule('0 0 1 * *', () => {
  backupDatabase();
});