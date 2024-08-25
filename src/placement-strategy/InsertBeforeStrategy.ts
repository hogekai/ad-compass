import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class InsertBeforeStrategy implements PlacementStrategy {
  /**
   * Places the alternative content inside the target element.
   * @param content Alternative content to place
   * @param targetElement Target element to place the content
   * @returns The target element with the alternative content placed
   */
  public async place(
    content: AlternativeContent,
    targetElement: HTMLElement
  ): Promise<HTMLElement> {
    const fragment = this.createFragment(content.toHTML());
    targetElement.insertBefore(fragment, targetElement.firstChild);
    return targetElement;
  }

  private createFragment(htmlString: string): DocumentFragment {
    return document.createRange().createContextualFragment(htmlString);
  }
}
