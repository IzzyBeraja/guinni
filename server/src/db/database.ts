import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./database";

export const dbConnection = () => {
  let pool: Pool;
  let db: ReturnType<typeof drizzle>;

  const setup = async () => {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL is not defined in environment variables");
    }

    pool = new Pool({
      connectionString,
    });

    // Test the connection with a ping
    try {
      const client = await pool.connect();
      await client.query("SELECT 1");
      client.release();

      db = drizzle(pool, { schema });
      console.log("Database connection established");

      return db;
    } catch (error) {
      console.error("Failed to connect to database:", error);
      throw error; // Rethrow to be caught by caller
    }
  };

  const get = () => {
    if (!db) {
      throw new Error("Database not initialized. Call setupDb first.");
    }
    return db;
  };

  const close = async () => {
    if (pool) {
      return pool.end();
    }
  };

  return {
    setup,
    get,
    close,
  };
};
