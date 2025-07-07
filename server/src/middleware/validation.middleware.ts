import { type, Type } from "arktype";
import { Request, Response, NextFunction } from "express";

export function validate<T>(validator: Type<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const out = validator(req.body);
    if (out instanceof type.errors) {
      return res.status(400).json({
        success: false,
        error: "Invalid input data",
        details: out.summary,
      });
    }
    req.body = out;
    next();
  };
}
