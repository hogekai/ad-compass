import { AlternativeContent } from "./AlternativeContent";
import { AlternativeContentPlacer } from "./AlternativeContentPlacer";
import { EventEmitter } from "./EventEmitter";
import { AdCompassOptions } from "./types/AdCompassOptions";

export class AdCompass {
  private alternativeContentPlacer: AlternativeContentPlacer;
  private alternativeContent: AlternativeContent;
  private eventEmitter: EventEmitter;

  constructor(options: AdCompassOptions) {
    this.alternativeContentPlacer = options.alternativeContentPlacer;
    this.alternativeContent = options.alternativeContent;
    this.eventEmitter = new EventEmitter();
  }

  public async initialize() {
    if (this.alternativeContentPlacer.isTargetEmpty()) {
      await this.alternativeContentPlacer.place(this.alternativeContent);
      this.eventEmitter.emit("ALTERNATIVE_CONTENT_IMPRESSION", {});
    }
  }
}
