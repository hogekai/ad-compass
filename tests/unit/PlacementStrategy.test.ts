import { HTMLAlternativeContent } from "@/alternative-content/HTMLAlternativeContent";
import { AppendChildStrategy } from "@/placement-strategy/AppendChildStrategy";
import { describe, expect, it } from "vitest";

describe("PlacementStrategy", () => {
    it("Append child strategy test", () => {
        const content = new HTMLAlternativeContent({  content: "<div>Test</div>" });
        const appendChildStrategy = new AppendChildStrategy();

        const parent = document.createElement("div");
        appendChildStrategy.place(content, parent);

        expect(parent.innerHTML).toBe("<div>Test</div>");
    });
});