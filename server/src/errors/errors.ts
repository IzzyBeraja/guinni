import type { ErrorType } from "@/types/errors";
import { ERROR_CODE } from "@/errors/errorCodes";

export class CodedError extends Error {
  public readonly code: number;
  public readonly details: string;
  public readonly httpStatus: number;

  constructor(errorType: ErrorType) {
    const { code, details, httpStatus, message } = ERROR_CODE[errorType];

    super(message);
    this.name = "CodedError";
    this.code = code;
    this.details = details;
    this.httpStatus = httpStatus;
  }
}

export function ErrorCode(code: ErrorType): CodedError {
  return new CodedError(code);
}
