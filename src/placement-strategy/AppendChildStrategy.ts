import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class AppendChildStrategy implements PlacementStrategy {
    public place(content: AlternativeContent, targetElement: HTMLElement): void {
        const tempContainer = this.generateTemporaryContainer(content.toHTML());
        
        while (tempContainer.firstChild) {
            targetElement.appendChild(tempContainer.firstChild);
        }
    }

    private generateTemporaryContainer(htmlString: string): HTMLDivElement {    
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = htmlString;
        return tempContainer;
    }
}   