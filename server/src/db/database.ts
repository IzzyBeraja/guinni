import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { users } from "@/models/tables/users";
import { receipts } from "@/models/tables/receipts";
import { receiptPermissions } from "@/models/tables/receiptPermissions";

const schema = { users, receipts, receiptPermissions };

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

    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();

    db = drizzle(pool, { schema });
    console.log("Database connection established");

    return db;
  };

  const get = () => {};

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
