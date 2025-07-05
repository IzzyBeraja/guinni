import cors from "cors";
import express from "express";

import { config } from "@/config";
import { rootRouter } from "@/routes/routes";
import { buildServices } from "@/services/services";
import { servicesMiddleware } from "@/middleware/servicesMiddleware";

const app = express();
const services = await buildServices(config);

app.use(servicesMiddleware(services));

app.use(cors());
app.use(express.json());
app.use("/api", rootRouter);

async function shutdown(err?: Error, code = 1): Promise<void> {
  if (err != null) console.error("Fatal error:", err);
  process.exit(code);
}

const { port, nodeEnv } = config;

try {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Environment: ${nodeEnv}`);
  });
} catch (err) {
  console.error("Startup error:", err);
  shutdown(err as Error);
}

process.on("uncaughtException", (err: Error) => shutdown(err));
process.on("unhandledRejection", (err: Error) => shutdown(err));
process.on("SIGINT", () => shutdown());
process.on("SIGTERM", () => shutdown());
