import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class AppendChildStrategy implements PlacementStrategy {
    public place(content: AlternativeContent, targetElement: HTMLElement): void {
        const htmlString = content.toHTML();
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = htmlString;
        
        while (tempContainer.firstChild) {
            targetElement.appendChild(tempContainer.firstChild);
        }
    }
}   