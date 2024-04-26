import { AdBlockDetector } from "@/adblock-detector";
import { mockAdBlocker } from "test/mock/mockAdBlocker";
import { beforeEach, describe, expect, it } from "vitest";

describe("AdBlockDetector", () => {
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetParent", {
      get() {
        if(this.style.display === 'none') {
          return null;
        } else {
          return this.parentNode; 
        }
      },
    });
  });

  it("広告ブロックが有効でない場合、`detect`は`false`を返すべき", () => {
    const detector = new AdBlockDetector();
    expect(detector.detect()).toBe(false);
  });

  it("広告ブロックが有効な場合、`detect`は`true`を返すべき", () => {
    const detector = new AdBlockDetector();

    mockAdBlocker();

    expect(detector.detect()).toBe(true);
  });
});
