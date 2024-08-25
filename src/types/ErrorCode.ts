export const ErrorCode = {
  TARGET_ELEMENT_NOT_FOUND: 'TARGET_ELEMENT_NOT_FOUND',
  INITIALIZATION_FAILED: "INITIALIZATION_FAILED",
  CONTENT_PLACE_FAILED: "CONTENT_PLACE_FAILED",
  UNKNOWN: "UNKNOWN",
} as const;

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
