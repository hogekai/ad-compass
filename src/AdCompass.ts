import { AdCompassError } from "./AdCompassError";
import { AlternativeContent } from "./AlternativeContent";
import { AlternativeContentPlacer } from "./AlternativeContentPlacer";
import { EventEmitter } from "./EventEmitter";
import {
  AdCompassEventType,
  AdCompassEventTypeMap,
} from "./types/AdCompassEventType";
import { AdCompassOptions } from "./types/AdCompassOptions";
import { ErrorCode } from "./types/ErrorCode";
import { wait } from "./utils/wait";

export class AdCompass {
  private alternativeContentPlacer: AlternativeContentPlacer;
  private alternativeContent: AlternativeContent;
  private eventEmitter: EventEmitter;

  constructor(options: AdCompassOptions) {
    this.alternativeContentPlacer = options.alternativeContentPlacer;
    this.alternativeContent = options.alternativeContent;
    this.eventEmitter = new EventEmitter();
  }

  /**
   * Initializes the AdCompass instance.
   */
  public async initialize() {
    try {
      await wait(100);

      if (this.alternativeContentPlacer.isTargetEmpty()) {
        await this.alternativeContentPlacer.place(this.alternativeContent);
        this.eventEmitter.emit("ALTERNATIVE_CONTENT_IMPRESSION", {});
      }
    } catch (error: unknown) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown) {
    if (error instanceof AdCompassError) {
      this.eventEmitter.emit(AdCompassEventType.ERROR, error);
    } else {
      const wrappedError = new AdCompassError(
        ErrorCode.INITIALIZATION_FAILED,
        "An unexpected error occurred"
      );
      this.eventEmitter.emit(AdCompassEventType.ERROR, wrappedError);
    }
  }

  /**
   * Subscribes to an event.
   * @param eventType AdCompass event type
   * @param callback Callback function
   */
  public on<T extends keyof AdCompassEventTypeMap>(
    eventType: T,
    callback: (data: AdCompassEventTypeMap[T]) => void
  ) {
    this.eventEmitter.on(eventType, callback);
  }

  /**
   * Unsubscribes from an event.
   * @param eventType AdCompass event type
   * @param callback Callback function
   **/
  public off<T extends keyof AdCompassEventTypeMap>(
    eventType: T,
    callback: (data: AdCompassEventTypeMap[T]) => void
  ) {
    this.eventEmitter.off(eventType, callback);
  }
}
