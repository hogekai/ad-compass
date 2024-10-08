import { AdCompassError } from "@/AdCompassError";
import { ErrorCode } from "@/types/ErrorCode";
import { describe, expect, it } from "vitest";

describe("AdCompassError", () => {
    it('should create an instance with the correct code and message', () => {
        const code = ErrorCode.UNKNOWN;
        const message = "Test error message";
        const error = new AdCompassError(code, message);

        expect(error).toBeInstanceOf(AdCompassError);
        expect(error.message).toBe(message);
        expect(error.code).toBe(code);
        expect(error.name).toBe("AdCompassError");
    });

    it('should be throwable and catch', () => {
        expect(() => {
            throw new AdCompassError(ErrorCode.UNKNOWN, 'Test error')
        }).to.throw(AdCompassError, 'Test error');
    });
});