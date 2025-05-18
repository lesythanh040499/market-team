import { config } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { DataSource } from 'typeorm';

config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'mydb',
});

async function runMigration() {
  await dataSource.initialize();

  const sqlFile = path.join(__dirname, './migrations/schema.sql');
  const sql = fs.readFileSync(sqlFile, 'utf8');

  await dataSource.query(sql);

  await dataSource.destroy();
}

runMigration().catch((err) => {
  console.error('❌ Error executing migration SQL:', err);
  process.exit(1);
});
