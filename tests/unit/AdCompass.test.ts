import { AlternativeContent } from "@/AlternativeContent";
import { AlternativeContentPlacer } from "@/AlternativeContentPlacer";
import { PlacementStrategy } from "@/PlacementStrategy";
import { MockAlternativeContent } from "tests/mock/MockAlternativeContent";
import { MockPlacementStrategy } from "tests/mock/MockPlacementStrategy";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AdCompass } from "@/AdCompass";

describe("AdCompass", () => {
  let adCompass: AdCompass;
  let mockAlternativeContentPlacer: AlternativeContentPlacer;
  let mockAlternativeContent: AlternativeContent;
  let mockPlacementStrategy: PlacementStrategy;
  let targetSelector = "#target";
  let targetElement: HTMLDivElement;

  beforeEach(() => {
    targetElement = document.createElement("div");
    targetElement.id = "target";
    document.body.innerHTML = "";
    document.body.appendChild(targetElement);
    
    mockAlternativeContent = new MockAlternativeContent();
    mockPlacementStrategy = new MockPlacementStrategy();
    mockAlternativeContentPlacer = new AlternativeContentPlacer({
      placementStrategy: mockPlacementStrategy,
      targetSelector: targetSelector,
    });

    adCompass = new AdCompass({
      alternativeContentPlacer: mockAlternativeContentPlacer,
      alternativeContent: mockAlternativeContent,
    });
  });

  it("should initialize correctly", () => {
    expect(adCompass).toBeDefined();
  });
});
