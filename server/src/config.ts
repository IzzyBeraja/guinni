import dotenv from "dotenv";
import { DbConfig } from "@/services/db/dbService";

dotenv.config();

export interface Config {
  port: number;
  nodeEnv: string;
  dbConfig: DbConfig;
}

export const config: Config = {
  port: parseInt(process.env.PORT || "3000", 10),
  nodeEnv: process.env.NODE_ENV || "DEV",

  dbConfig: {
    connectionString: process.env.DATABASE_URL,
  },
};
