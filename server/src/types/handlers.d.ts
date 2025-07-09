// Simplified handler types for Express without `any` or `unknown` where possible
import { NextFunction, Request, Response } from "express";

/**
 * Defines optional generic parts of a route handler.
 * - `Request` body type (defaults to undefined)
 * - `Response` return body type (defaults to undefined)
 * - `Error` error type (defaults to undefined)
 * - `Params` route params (defaults to {})
 * - `Query` query params (defaults to {})
 * - `Middleware` extracted middleware state (defaults to {})
 */
export interface HandlerShape {
  Request?: unknown;
  Response?: unknown;
  Params?: Record<string, string>;
  Query?: Record<string, unknown>;
  Middleware?: Record<string, unknown>;
}

/**
 * Infers each piece of HandlerShape, defaulting to undefined or empty object.
 */
export type CreateHandler<T extends HandlerShape = HandlerShape> = {
  Request: T["Request"];
  Response: T["Response"];
  Params: T["Params"] extends Record<string, any> ? T["Params"] : {};
  Query: T["Query"] extends Record<string, any> ? T["Query"] : {};
};

/**
 * A typed async Express handler.
 * Ensures req, res, next are strongly typed.
 */
export type AsyncHandler<T extends CreateHandler> = (
  req: Request<T["Params"], T["Response"], T["Request"], T["Query"]>,
  res: Response<T["Response"]>,
  next: NextFunction
) => Promise<void> | void;
