import { Router, Request, Response } from "express";
import { usersRouter } from "@/routes/users";
import { healthRouter } from "@/routes/health";

export const rootRouter = Router();

// Root API endpoint
rootRouter.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Guinni API is working!",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      users: "/api/users",
    },
  });
});

// Mount route modules with explicit paths
rootRouter.use("/health", healthRouter);
rootRouter.use("/users", usersRouter);

// 404 handler for unmatched API routes
rootRouter.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "API endpoint not found",
    path: req.originalUrl,
  });
});
