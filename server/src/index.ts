import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Server } from "http";

import { dbConnection } from "@/db/database";
import { rootRouter } from "@/routes/routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const db = dbConnection();
let server: Server | undefined;

app.use(cors());
app.use(express.json());
app.use("/api", rootRouter);

async function shutdown(err?: Error, code = 0) {
  if (err != null) console.error("Fatal error:", err);
  if (server != null) server.close();

  await db.close();
  process.exit(code);
}

// Global process event listeners
process.on("uncaughtException", (err: Error) => shutdown(err, 1));
process.on("unhandledRejection", (err: Error) => shutdown(err, 1));
process.on("SIGINT", () => shutdown());
process.on("SIGTERM", () => shutdown());

async function startServer() {
  try {
    await db.setup();

    server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

    server.on("error", (err: Error) => shutdown(err, 1));
  } catch (err) {
    await db.close();
    console.error("Startup error:", err);
    process.exit(1);
  }
}

startServer();
