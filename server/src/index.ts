import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { dbConnection } from "@/db/database";
import { rootRouter } from "@/routes/routes";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", rootRouter);

const db = dbConnection();

async function startServer() {
  try {
    // Initialize the database connection
    await db.setup();

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Handle shutdown gracefully
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  db.close().then(() => {
    console.log("Database connection closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully");
  db.close().then(() => {
    console.log("Database connection closed");
    process.exit(0);
  });
});

// Start the server
startServer();
