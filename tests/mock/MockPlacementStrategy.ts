import { AlternativeContent } from "@/AlternativeContent";
import { PlacementStrategy } from "@/PlacementStrategy";

export class MockPlacementStrategy implements PlacementStrategy {
    public async place(content: AlternativeContent, targetElement: HTMLElement): Promise<HTMLElement> {
        return targetElement;
    }
}