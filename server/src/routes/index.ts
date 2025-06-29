import { Router } from "express";

export const rootRouter = Router();

rootRouter.get("/", (_, res) => {
  res.json({ message: "API is working!" });
});