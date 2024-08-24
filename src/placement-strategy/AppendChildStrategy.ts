import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class AppendChildStrategy implements PlacementStrategy {
    public async place(content: AlternativeContent, targetElement: HTMLElement): Promise<HTMLElement> {
        const tempContainer = this.generateTemporaryContainer(content.toHTML());
        
        while (tempContainer.firstChild) {
            targetElement.appendChild(tempContainer.firstChild);
        }

        return targetElement;
    }

    private generateTemporaryContainer(htmlString: string): HTMLDivElement {    
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = htmlString;
        return tempContainer;
    }
}   