export const ErrorCode = {
  INITIALIZATION_FAILED: "INITIALIZATION_FAILED",
  CONTENT_PLACE_FAILED: "CONTENT_PLACE_FAILED",
  UNKNOWN: "UNKNOWN",
} as const;

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
