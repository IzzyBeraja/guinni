import { isNullOrEmptyString } from "@/utils/stings";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { users } from "@/models/tables/users";
import { receipts } from "@/models/tables/receipts";
import { receiptPermissions } from "@/models/tables/receiptPermissions";

export type DatabaseSchema = {
  users: typeof users;
  receipts: typeof receipts;
  receiptPermissions: typeof receiptPermissions;
};

export interface DbService {
  setup(): Promise<void>;
  getDb(): NodePgDatabase<DatabaseSchema>;
  close(): Promise<void>;
}

export interface DbConfig {
  connectionString?: string;
}

export function dbService(config: DbConfig): DbService {
  let pool: Pool | null = null;
  let db: NodePgDatabase<DatabaseSchema> | null = null;

  const setup = async (): Promise<void> => {
    if (isNullOrEmptyString(config.connectionString)) {
      throw new Error("Database connection string is required");
    }

    pool = new Pool({
      connectionString: config.connectionString,
    });

    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();

    const schema = { users, receipts, receiptPermissions };
    db = drizzle(pool, { schema });

    console.log("Database connection established 💾");
  };

  const getDb = (): NodePgDatabase<DatabaseSchema> => {
    if (!db) {
      throw new Error("Database not initialized. Call setup() first.");
    }
    return db;
  };

  const close = async (): Promise<void> => {
    if (pool) {
      await pool.end();
      pool = null;
      db = null;
      console.log("Database connection closed");
    }
  };

  return {
    setup,
    getDb,
    close,
  };
}
