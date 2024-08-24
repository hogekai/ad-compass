import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class InsertBeforeStrategy implements PlacementStrategy {
    public async place(content: AlternativeContent, targetElement: HTMLElement): Promise<HTMLElement> {
        const fragment = this.createFragment(content.toHTML());
        targetElement.insertBefore(fragment, targetElement.firstChild);
        return targetElement;
    }

    private createFragment(htmlString: string): DocumentFragment {
        return document.createRange().createContextualFragment(htmlString);
    }
}