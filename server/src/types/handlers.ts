import { Request, Response, NextFunction } from "express";

/**
 * Defines the shape for an Express route handler's generics.
 */
export type HandlerShape = {
  Request: unknown;
  Response: unknown;
  Error?: unknown;
  Params?: unknown;
  Query?: unknown;
  Middleware?: unknown;
};

/**
 * A typed async route handler for Express using a HandlerShape to infer the Request/Response types.
 */
export type AsyncHandler<T extends HandlerShape> = (
  req: Request<
    T["Params"],
    T["Response"] | T["Error"],
    T["Request"],
    T["Query"]
  > &
    T["Middleware"],
  res: Response<T["Response"] | T["Error"]>,
  next?: NextFunction
) => Promise<void>;
