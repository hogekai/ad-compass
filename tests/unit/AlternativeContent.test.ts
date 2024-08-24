import { describe, expect, it } from "vitest";

describe("AlternativeContent", () => {
  it("HTML alternative content rendering test", () => {
    const htmlAlternativeContent = new HTMLAlternativeContent({
        content: "<div>Test</div>",
    });

    htmlAlternativeContent.toHTML();

    expect(htmlAlternativeContent.toHTML()).toBe("<div>Test</div>");
  });

  it("Image alternative content rendering test", () => {});
});
