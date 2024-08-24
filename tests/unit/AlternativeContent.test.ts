import { HTMLAlternativeContent } from "@/alternative-content/HTMLAlternativeContent";
import { ImageAlternativeContent } from "@/alternative-content/ImageAlternativeContent";
import { s } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { describe, expect, it } from "vitest";

describe("AlternativeContent", () => {
  it("HTML alternative content rendering test", () => {
    const htmlAlternativeContent = new HTMLAlternativeContent({
        content: "<div>Test</div>",
    });

    htmlAlternativeContent.toHTML();

    expect(htmlAlternativeContent.toHTML()).toBe("<div>Test</div>");
  });

  it("Image alternative content rendering test", () => {
    const imageAlternativeContent = new ImageAlternativeContent({
        src: "https://example.com/image.jpg",
        alt: "Test image",
        style: "width: 100px; height: 100px;",
    });

    imageAlternativeContent.toHTML();

    expect(imageAlternativeContent.toHTML()).toBe(
        '<img src="https://example.com/image.jpg" alt="Test image" style="width: 100px; height: 100px;">'
    );
  });
});
