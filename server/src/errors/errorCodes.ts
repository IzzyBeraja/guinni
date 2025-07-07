import type { ErrorType, ErrorDefinition } from "@/types/errors";

// TypeScript will enforce that all ErrorCodes are included and no extras exist
export const ERROR_CODE = {
  // General API Errors (1000-1099)
  API_ERROR: {
    code: 1000,
    httpStatus: 500,
    message: "An unexpected error occurred",
    details: "API Error - Check server logs for details",
  },
  INTERNAL_SERVER_ERROR: {
    code: 1001,
    httpStatus: 500,
    message: "Internal server error",
    details: "Internal server error - Check application state and logs",
  },

  // Validation Errors (1100-1199)
  VALIDATION_ERROR: {
    code: 1100,
    httpStatus: 400,
    message: "Invalid data provided",
    details:
      "Validation failed - Check request data format and required fields",
  },
  INVALID_INPUT: {
    code: 1101,
    httpStatus: 400,
    message: "Invalid input data",
    details: "Input validation failed - Check data types and format",
  },
  MISSING_REQUIRED_FIELD: {
    code: 1102,
    httpStatus: 400,
    message: "Required information is missing",
    details: "One or more required fields are missing from the request",
  },

  // Authentication & Authorization Errors (1200-1299)
  UNAUTHORIZED: {
    code: 1200,
    httpStatus: 401,
    message: "Authentication required",
    details: "User authentication is required to access this resource",
  },
  FORBIDDEN: {
    code: 1201,
    httpStatus: 403,
    message: "Access denied",
    details: "User does not have permission to access this resource",
  },
  INVALID_TOKEN: {
    code: 1202,
    httpStatus: 401,
    message: "Invalid authentication",
    details: "Authentication token is invalid or expired",
  },

  // Resource Errors (1300-1399)
  NOT_FOUND: {
    code: 1300,
    httpStatus: 404,
    message: "Resource not found",
    details: "The requested resource could not be found",
  },
  DUPLICATE_RESOURCE: {
    code: 1301,
    httpStatus: 409,
    message: "Resource already exists",
    details: "A resource with the same identifier already exists",
  },

  // User-specific Errors (1400-1499)
  USER_NOT_FOUND: {
    code: 1400,
    httpStatus: 404,
    message: "User not found",
    details: "The specified user ID does not exist in the database",
  },
  USER_ALREADY_EXISTS: {
    code: 1401,
    httpStatus: 409,
    message: "User already exists",
    details: "A user with this email or identifier already exists",
  },
  USER_UPDATE_FAILED: {
    code: 1402,
    httpStatus: 500,
    message: "Failed to update user",
    details:
      "User update operation failed - Check database connection and data constraints",
  },
  USER_DELETE_FAILED: {
    code: 1403,
    httpStatus: 500,
    message: "Failed to delete user",
    details:
      "User deletion operation failed - Check database constraints and dependencies",
  },

  // Database Errors (1500-1599)
  DATABASE_ERROR: {
    code: 1500,
    httpStatus: 500,
    message: "Database error occurred",
    details: "Database operation failed - Check connection and query syntax",
  },
  DATABASE_CONNECTION_FAILED: {
    code: 1501,
    httpStatus: 500,
    message: "Service temporarily unavailable",
    details:
      "Failed to connect to database - Check connection string and database status",
  },
  QUERY_FAILED: {
    code: 1502,
    httpStatus: 500,
    message: "Data operation failed",
    details:
      "Database query execution failed - Check query syntax and data constraints",
  },

  // Receipt-specific Errors (1600-1699)
  RECEIPT_NOT_FOUND: {
    code: 1600,
    httpStatus: 404,
    message: "Receipt not found",
    details: "The specified receipt ID does not exist in the database",
  },
  RECEIPT_PROCESSING_FAILED: {
    code: 1601,
    httpStatus: 500,
    message: "Failed to process receipt",
    details:
      "Receipt processing operation failed - Check file format and processing pipeline",
  },
} satisfies Record<ErrorType, ErrorDefinition>;
