import { Config } from "@/config";
import { dbService, DbService } from "@/services/db/dbService";

export interface Services {
  db: DbService;
}

export async function buildServices(config: Config): Promise<Services> {
  const db = dbService(config.dbConfig);

  await db.setup();

  return {
    db,
  };
}

export async function setupServices(services: Services): Promise<void> {
  await services.db.setup();
}
