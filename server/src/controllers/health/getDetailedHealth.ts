import { Request, Response } from "express";

export function getDetailedHealth(req: Request, res: Response) {
  const healthCheck = {
    success: true,
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
    version: process.env.npm_package_version || "unknown",
    memory: process.memoryUsage(),
    // TODO: Add database health check when implemented
    services: {
      database: "unknown", // Will be updated when database health check is implemented
    },
  };

  res.status(200).json(healthCheck);
}
