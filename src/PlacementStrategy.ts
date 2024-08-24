import { AlternativeContent } from "./AlternativeContent";

export interface PlacementStrategy {
    place(content: AlternativeContent, targetElement: HTMLElement): void;  
}