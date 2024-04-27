import { AdBlockDetector } from "@/adblock-detector";
import { mockAdBlocker } from "test/mock/mockAdBlocker";
import { describe, expect, it, vi } from "vitest";

describe("AdBlockDetector", () => {
  it("広告ブロックが有効でない場合、`detect`は`false`を返すべき", async () => {
    const detector = new AdBlockDetector();
    vi.spyOn(document.head, "appendChild").mockImplementation((node: Node) => {
      const element = node as HTMLScriptElement;
      window.adBlockDetect = false;
      setTimeout(() => element.onload && element.onload(new Event("load")), 0);
      return node;
    });
    expect(await detector.detect()).toBe(false);
  });

  it("広告ブロックが有効な場合、`detect`は`true`を返すべき", async () => {
    const detector = new AdBlockDetector();
    mockAdBlocker();
    expect(await detector.detect()).toBe(true);
  });
});
