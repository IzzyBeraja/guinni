import { Router, Request, Response } from "express";
import { createReceipt } from "@/controllers/receipts/createReceipt";
import { getAllUsers } from "@/controllers/users/getAllUsers";
import { getUserById } from "@/controllers/users/getUserById";
import { createUser } from "@/controllers/users/createUser";
import { updateUser } from "@/controllers/users/updateUser";
import { deleteUser } from "@/controllers/users/deleteUser";

export const rootRouter = Router();

// Root API endpoint
rootRouter.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Guinni API is working!",
    version: "1.0.0",
  });
});

// Receipt routes
rootRouter.post("/receipt", createReceipt);

// User routes
rootRouter.get("/users", getAllUsers);
rootRouter.get("/users/:id", getUserById);
rootRouter.post("/users", createUser);
rootRouter.put("/users/:id", updateUser);
rootRouter.delete("/users/:id", deleteUser);

// 404 handler for unmatched API routes
rootRouter.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "API endpoint not found",
    path: req.originalUrl,
  });
});
