export const isNullOrEmptyString = (
  value: string | null | undefined
): boolean => {
  return value == null || value.trim() === "";
};
