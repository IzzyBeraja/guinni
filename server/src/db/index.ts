import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../models/schema";

// Database connection
let pool: Pool;
let db: ReturnType<typeof drizzle>;

export function setupDb() {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    console.error("DATABASE_URL is not defined in environment variables");
    process.exit(1);
  }

  pool = new Pool({
    connectionString,
  });

  db = drizzle(pool, { schema });
  
  console.log("Database connection established");
  
  return db;
}

export function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call setupDb first.");
  }
  return db;
}

export function closeDb() {
  return pool?.end();
}