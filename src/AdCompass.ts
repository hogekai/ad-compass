import { AlternativeContent } from "./AlternativeContent";
import { AlternativeContentPlacer } from "./AlternativeContentPlacer";
import { EventEmitter } from "./EventEmitter";
import { AdCompassEventTypeMap } from "./types/AdCompassEventType";
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

  public on<T extends keyof AdCompassEventTypeMap>(
    eventType: T,
    callback: (data: AdCompassEventTypeMap[T]) => void
  ) {
    this.eventEmitter.on(eventType, callback);
  }

  public off<T extends keyof AdCompassEventTypeMap>(
    eventType: T,
    callback: (data: AdCompassEventTypeMap[T]) => void
  ) {
    this.eventEmitter.off(eventType, callback);
  }
}
