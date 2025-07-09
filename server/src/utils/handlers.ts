import type { AsyncHandler, CreateHandler, HandlerShape } from "@/types/handlers";

/**
 * Wraps an async handler to catch exceptions and forward to next().
 */
export function asyncHandler<T extends HandlerShape>(
  fn: AsyncHandler<CreateHandler<T>>
): AsyncHandler<CreateHandler<T>> {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
