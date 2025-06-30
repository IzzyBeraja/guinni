import { Request, Response } from "express";

export function getHealth(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
