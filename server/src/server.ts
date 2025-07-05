import cors from "cors";
import express from "express";

import { config } from "@/config";
import { rootRouter } from "@/routes/routes";
// import { buildServices } from "@/services/services";

const app = express();
// const services = await buildServices(config);

app.use(cors());
app.use(express.json());
app.use("/api", rootRouter);

async function shutdown(err?: Error, code = 1): Promise<void> {
  if (err != null) console.error("Fatal error:", err);
  process.exit(code);
}

// Global process event listeners
process.on("uncaughtException", (err: Error) => shutdown(err));
process.on("unhandledRejection", (err: Error) => shutdown(err));
process.on("SIGINT", () => shutdown());
process.on("SIGTERM", () => shutdown());

try {
  app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`);
    console.log(`Environment: ${config.nodeEnv}`);
  });
} catch (err) {
  console.error("Startup error:", err);
  shutdown(err as Error);
}
