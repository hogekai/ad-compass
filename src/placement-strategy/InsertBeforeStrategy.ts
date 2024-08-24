import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class InsertBeforeStrategy implements PlacementStrategy {
    public async place(content: AlternativeContent, targetElement: HTMLElement): Promise<HTMLElement> {
        const fragment = document.createRange().createContextualFragment(content.toHTML());
        targetElement.insertBefore(fragment, targetElement.firstChild);
        return targetElement;
    }
}