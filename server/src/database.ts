import postgres from 'postgres';
import { env } from './env';

export const sql = postgres(env.DATABASE_URL);

export async function initializeDatabase() {
  const tableExists = await sql`SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE  table_schema = 'public'
      AND    table_name   = 'clients'
  )`;

  if (!tableExists[0].exists) {
    await sql`CREATE TABLE clients (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100),
          email VARCHAR(100) UNIQUE,
          phone VARCHAR(15),
          coordinates POINT
      )`;
  }
}