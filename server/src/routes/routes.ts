import { Post as PostReceipt, PostInput as PostReceiptInput } from "@/controllers/receipts";
import { Get as GetUsers } from "@/controllers/users";
import { ErrorCode } from "@/errors/errors";
import { validate } from "@/middleware/validation.middleware";
import { NextFunction, Request, Response, Router } from "express";

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
rootRouter.post("/receipts", validate(PostReceiptInput), PostReceipt);

// User routes
rootRouter.get("/users", GetUsers);

// 404 handler for unmatched API routes
rootRouter.use((_req: Request, _res: Response, next: NextFunction) => {
  throw ErrorCode("NOT_FOUND");
});
