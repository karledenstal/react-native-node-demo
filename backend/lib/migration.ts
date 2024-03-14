import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import db from './db'

const migrateDB = async () => {
  migrate(db, { migrationsFolder: 'drizzle' })
}

void migrateDB()
