import { HTMLAlternativeContent } from "@/alternative-content/HTMLAlternativeContent";
import { AppendChildStrategy } from "@/placement-strategy/AppendChildStrategy";
import { InsertBeforeStrategy } from "@/placement-strategy/InsertBeforeStrategy";
import { describe, expect, it } from "vitest";

describe("PlacementStrategy", () => {
    it("Placement test with append child strategy", () => {
        const content = new HTMLAlternativeContent({  content: "<div>Test</div>" });
        const appendChildStrategy = new AppendChildStrategy();

        const parent = document.createElement("div");
        appendChildStrategy.place(content, parent);

        expect(parent.innerHTML).toBe("<div>Test</div>");
    });

    it('Placement test with append child strategy with multiple content', () => {
        const content = new HTMLAlternativeContent({ content: "<div>Test 1</div><div>Test 2</div>" });
        const appendChildStrategy = new AppendChildStrategy();

        const parent = document.createElement("div");
        appendChildStrategy.place(content, parent);

        expect(parent.innerHTML).toBe("<div>Test 1</div><div>Test 2</div>");
    });

    it('Placement test with append child strategy with empty content', () => {
        const content = new HTMLAlternativeContent({ content: "" });
        const appendChildStrategy = new AppendChildStrategy();

        const parent = document.createElement("div");
        appendChildStrategy.place(content, parent);

        expect(parent.innerHTML).toBe("");
    });

    it('Placement test with insert before strategy', () => {
        const content = new HTMLAlternativeContent({ content: "<div>Test</div>" });
        const insertBeforeStrategy = new InsertBeforeStrategy();

        const parent = document.createElement("div");
        insertBeforeStrategy.place(content, parent);

        expect(parent.innerHTML).toBe("<div>Test</div>");
    });

    it('Placement test with insert before strategy with empty content', () => {
        const content = new HTMLAlternativeContent({ content: "" });
        const insertBeforeStrategy = new InsertBeforeStrategy();

        const parent = document.createElement("div");
        insertBeforeStrategy.place(content, parent);

        expect(parent.innerHTML).toBe("");
    });

    it('Placement test with insert before strategy with multiple content', () => {
        const content = new HTMLAlternativeContent({ content: "<div>Test 1</div><div>Test 2</div>" });
        const insertBeforeStrategy = new InsertBeforeStrategy();

        const parent = document.createElement("div");
        insertBeforeStrategy.place(content, parent);

        expect(parent.innerHTML).toBe("<div>Test 1</div><div>Test 2</div>");
    });
});