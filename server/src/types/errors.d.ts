export interface ErrorDefinition {
  code: number;
  httpStatus: number;
  message: string;
  details: string;
}

export type ErrorType =
  | "API_ERROR"
  | "INTERNAL_SERVER_ERROR"
  | "VALIDATION_ERROR"
  | "INVALID_INPUT"
  | "MISSING_REQUIRED_FIELD"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "INVALID_TOKEN"
  | "NOT_FOUND"
  | "DUPLICATE_RESOURCE"
  | "USER_NOT_FOUND"
  | "USER_ALREADY_EXISTS"
  | "USER_UPDATE_FAILED"
  | "USER_DELETE_FAILED"
  | "DATABASE_ERROR"
  | "DATABASE_CONNECTION_FAILED"
  | "QUERY_FAILED"
  | "RECEIPT_NOT_FOUND"
  | "RECEIPT_PROCESSING_FAILED";
