import { AlternativeContentPlacer } from "@/AlternativeContentPlacer";
import { PlacementStrategy } from "@/PlacementStrategy";
import { MockAlternativeContent } from "tests/mock/MockAlternativeContent";
import { MockPlacementStrategy } from "tests/mock/MockPlacementStrategy";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("AlternativeContentPlacer", () => {
  let placer: AlternativeContentPlacer;
  let mockStrategy: PlacementStrategy;
  let targetSelector = "#target";
  let targetElement: HTMLDivElement;

  beforeEach(() => {
    mockStrategy = new MockPlacementStrategy();
    targetElement = document.createElement("div");
    targetElement.id = "target";
    document.body.innerHTML = "";
    document.body.appendChild(targetElement);

    placer = new AlternativeContentPlacer({
      placementStrategy: mockStrategy,
      targetSelector: targetSelector,
    });
  });

  describe("isTargetEmpty", () => {
    it("should return true when target element is empty", () => {
      const result = placer.isTargetEmpty();

      expect(result).toBe(true);
    });

    it("should return false when target element is not empty", async () => {
      document
        .querySelector(targetSelector)
        ?.appendChild(document.createElement("div"));

      const result = placer.isTargetEmpty();

      expect(result).toBe(false);
    });

    it("should return true when target element contains only script tags", async () => {
      document
        .querySelector(targetSelector)
        ?.appendChild(document.createElement("script"));

      const result = placer.isTargetEmpty();

      expect(result).toBe(true);
    });

    it("should return false when target element contains only empty script tags and non-empty div element", () => {
      document
        .querySelector(targetSelector)
        ?.appendChild(document.createElement("script"));
      document
        .querySelector(targetSelector)
        ?.appendChild(document.createElement("div"));

      const result = placer.isTargetEmpty();

      expect(result).toBe(false);
    });
  });

  describe("place", () => {
    it("should call placement strategy with target element", async () => {
        const mockAlternativeContent = new MockAlternativeContent();
        const placeSpy = vi.spyOn(mockStrategy, "place");

        await placer.place(mockAlternativeContent);

        expect(placeSpy).toHaveBeenCalledWith(mockAlternativeContent, targetElement);
    });
  });
});
