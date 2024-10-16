# Databas Backup GitHub Action Documentation

## Overview

This GitHub Action automates the process of backing up a MongoDB database. It schedules regular backups using a CRON expression and provides an option for manual execution. The backup is stored in a new database, and old backups are automatically deleted based on a specified retention limit.

## Workflow Configuration

### Workflow File: `.github/workflows/db-backup.yml`

### Secrets Configuration:

- **CRON_SCHEDULE**: Set cron format schedule (e.g., `0 0 1 * *` for once a month).
- **PRIMARY_DB_URI**: MongoDB connection URI for the primary database.
- **PRIMARY_DB_NAME**: Name of the primary database to back up.
- **BACKUP_RETENTION_LIMIT**: Maximum number of backup databases to retain (default is 2). Set as a secret.
- **Script Path**: Path to the backup script (`scripts/databaseBackup.js`).

## Backup Script Overview

### Script File: `scripts/databaseBackup.js`

The backup script is responsible for creating backups of the specified MongoDB database. It connects to the primary database, generates a unique backup database name based on the current timestamp, and copies all documents from the primary database to the new backup database. It also manages backup retention by deleting older backups as specified.

### Key Functions

- **getBackupDatabaseName**: Generates a unique name for the backup database using the current timestamp in the format `YYYYMMDDHHMMSS`.
- **deleteOldBackups**: Deletes old backup databases to maintain the specified retention limit.
- **copyDocuments**: Copies documents from the primary database collections to the newly created backup database.
- **backupDatabase**: Orchestrates the backup process by connecting to the databases, starting a session, copying documents, and cleaning up old backups.

## Usage Instructions

### Running the Backup Script Manually

To run the backup script manually, trigger the GitHub Action from the Actions tab in your repository:

1. Go to the **Actions** tab in your GitHub repository.
2. Select the **Database Backup** workflow from the list.
3. Click on the **Run workflow** button.

### Automated Backups

For automated backups, ensure the `CRON_SCHEDULE` secret is set correctly. The workflow will run automatically based on the schedule defined in the CRON expression.

### Running the Backup Script with npm

If you want to run the backup script locally using `npm`, follow these steps:

1. Ensure you have Node.js and npm installed.
2. Navigate to the root of your project in your terminal.
3. Install the necessary dependencies by running:
   ```bash
   npm install mongodb dotenv
   ```
4. Add the necessary environment variables to a .env file in the root of your project:

```makefile
PRIMARY_DB_URI=mongodb://username:password@localhost:27017
PRIMARY_DB_NAME=myDatabase
BACKUP_RETENTION_LIMIT=5
```

5. run the script

```bash
    npm run backup:db
```

### Running in github actions

Here’s a quick example of how to set up the necessary secrets in your GitHub repository:

1. Go to Settings > Secrets and variables > Actions.
2. Click New repository secret.
3. Add the following secrets:

```makefile
    PRIMARY_DB_URI (e.g., mongodb://username:password@localhost:27017)
    PRIMARY_DB_NAME (e.g., myDatabase)
    BACKUP_RETENTION_LIMIT (e.g., 5)
```

```mermaid
graph TD
    A[Start Backup Process] --> B[Connect to Primary Database]
    B --> C[Generate Backup Database Name]
    C --> D[Create Backup Database]
    D --> E[Start Backup Session]
    E --> F[Clear Existing Backup Collections]

    subgraph Backup Collections
        direction TB
        F --> G[Iterate Through Collections]
        G --> H[Copy Documents to Backup]
        H --> I[Delete Old Backups]
    end

    I --> J[Commit Backup Transaction]
    J --> K[Close Database Connections]
    K --> L[Backup Completed Successfully]
    L --> M[End Backup Process]



```
