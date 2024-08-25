import { AlternativeContent } from "./AlternativeContent";
import { AlternativeContentPlacer } from "./AlternativeContentPlacer";
import { AdCompassOptions } from "./types/AdCompassOptions";

export class AdCompass {
    private alternativeContentPlacer: AlternativeContentPlacer;
    private alternativeContent: AlternativeContent;

    constructor(options: AdCompassOptions) {
        this.alternativeContentPlacer = options.alternativeContentPlacer;
        this.alternativeContent = options.alternativeContent;
    }
}