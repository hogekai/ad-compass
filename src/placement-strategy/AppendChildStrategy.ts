import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class AppendChildStrategy implements PlacementStrategy {
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
    const tempContainer = this.generateTemporaryContainer(content.toHTML());

    while (tempContainer.firstChild) {
      targetElement.appendChild(tempContainer.firstChild);
    }

    return targetElement;
  }

  private generateTemporaryContainer(htmlString: string): HTMLDivElement {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = htmlString;
    return tempContainer;
  }
}
