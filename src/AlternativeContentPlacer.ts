import { AdCompassError } from "./AdCompassError";
import { AlternativeContent } from "./AlternativeContent";
import { PlacementStrategy } from "./PlacementStrategy";
import { ErrorCode } from "./types/ErrorCode";

export type AlternativeContentPlacerProps = {
  placementStrategy: PlacementStrategy;
  targetSelector: string;
};

export class AlternativeContentPlacer {
  private targetElement: HTMLElement;
  private placementStrategy: PlacementStrategy;

  constructor({
    placementStrategy,
    targetSelector,
  }: AlternativeContentPlacerProps) {
    this.placementStrategy = placementStrategy;
    const targetElementBeforeEmptyConfirmation =
      document.querySelector<HTMLElement>(targetSelector);

    if (!targetElementBeforeEmptyConfirmation) {
      throw new AdCompassError(
        ErrorCode.TARGET_ELEMENT_NOT_FOUND,
        "Target element not found."
      );
    }

    this.targetElement = targetElementBeforeEmptyConfirmation;
  }

  public isTargetEmpty(): boolean {
    const content = this.targetElement.cloneNode(true) as HTMLElement;
    const scripts = content.getElementsByTagName("script");

    while (scripts.length > 0) {
      scripts[0].parentNode?.removeChild(scripts[0]);
    }

    return content.innerHTML.trim().length === 0;
  }

  public async place(content: AlternativeContent): Promise<HTMLElement> {
    return this.placementStrategy.place(content, this.targetElement);
  }
}
