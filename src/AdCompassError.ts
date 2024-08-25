import { ErrorCode } from "@/types/ErrorCode";

export class AdCompassError extends Error {
  constructor(public code: ErrorCode, message: string) {
    super(message);
    this.name = "AdCompassError";
    Object.setPrototypeOf(this, AdCompassError.prototype);
  }
}
