import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Defines the shape for an Express route handler's generics with proper constraints
 */
export type HandlerShape = {
  Request: unknown;
  Response: unknown;
  Error?: unknown;
  Params?: Record<string, string>;
  Query?: Record<string, unknown>;
  Middleware?: Record<string, unknown>;
};

/**
 * Helper to extract a property or return never if not defined
 */
type ExtractOrNever<T, K extends string> = K extends keyof T ? T[K] : never;

/**
 * Helper type that creates a handler shape with automatic never defaults for unused properties
 */
export type CreateHandler<T extends Partial<HandlerShape>> = {
  Request: ExtractOrNever<T, "Request">;
  Response: ExtractOrNever<T, "Response">;
  Error: ExtractOrNever<T, "Error">;
  Params: ExtractOrNever<T, "Params">;
  Query: ExtractOrNever<T, "Query">;
  Middleware: ExtractOrNever<T, "Middleware">;
};

/**
 * A request type that enforces never types for undefined handler properties
 */
type TypedRequest<T extends HandlerShape> = Omit<
  Request<unknown, unknown, unknown, unknown>,
  "body" | "params" | "query"
> & {
  body: T["Request"];
  params: ExtractOrNever<T, "Params">;
  query: ExtractOrNever<T, "Query">;
} & (ExtractOrNever<T, "Middleware"> extends never
    ? Record<string, never>
    : ExtractOrNever<T, "Middleware">);

/**
 * A typed async route handler that's directly compatible with Express Router
 */
export type AsyncHandler<T extends HandlerShape> = RequestHandler<
  ExtractOrNever<T, "Params">,
  T["Response"] | ExtractOrNever<T, "Error">,
  T["Request"],
  ExtractOrNever<T, "Query">
> & {
  (
    req: TypedRequest<T>,
    res: Response<T["Response"] | ExtractOrNever<T, "Error">>,
    next?: NextFunction
  ): Promise<void> | void;
};
