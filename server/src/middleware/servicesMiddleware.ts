import { Services } from "@/services/services";
import { Request, Response, NextFunction } from "express";

export function servicesMiddleware(services: Services) {
  return (req: Request, res: Response, next: NextFunction) => {
    req.services = services;
    next();
  };
}
