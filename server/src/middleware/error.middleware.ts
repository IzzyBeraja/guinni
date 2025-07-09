import { CodedError } from "@/errors/errors";
import { NextFunction, Request, Response } from "express";

export function errorHandler(error: Error, _req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(error);
  }

  if (error instanceof CodedError) {
    return res.status(error.httpStatus).json({
      error: {
        code: error.code,
        message: error.message,
        ...(process.env.NODE_ENV === "development" && {
          details: error.details,
          stack: error.stack,
        }),
      },
    });
  }

  if (error instanceof Error) {
    console.error("Unhandled Error:", error);
    return res.status(500).json({
      error: {
        code: 1000,
        message: "An unexpected error occurred",
        ...(process.env.NODE_ENV === "development" && {
          stack: error.stack,
        }),
      },
    });
  }

  return res.status(500).json({
    error: {
      code: 1001,
      message: "Internal server error",
      details: "An unexpected error occurred",
    },
  });
}
