import { i } from "vitest/dist/reporters-xEmem8D4.js";
import { AdCompassEventType, AdCompassEventTypeMap } from "./types/AdCompassEventType";

export type EventData<T extends AdCompassEventType> = AdCompassEventTypeMap[T];

export type EventCallback<T extends AdCompassEventType> = (data: EventData<T>) => void;

export class EventEmitter {
  private listeners: Map<AdCompassEventType, EventCallback<any>[]>;

  constructor() {
    this.listeners = new Map();
  }

  /**
   * Emit an event to all listeners
   * @param eventType The event type to emit
   * @param data The data to pass to the event listeners
   */
  public emit<T extends AdCompassEventType>(eventType: T, data: EventData<T>) {
    const listeners = this.getEventListeners(eventType);
    this.notifyListeners(listeners, data);
  }

  private getEventListeners<T extends AdCompassEventType>(eventType: T): EventCallback<T>[] {
    const eventListener = this.listeners.get(eventType) as EventCallback<T>[];

    if (!eventListener) {
      return [];
    }

    return eventListener;
  }

  private notifyListeners<T extends AdCompassEventType>(listeners: EventCallback<T>[], data: EventData<T>) {
    listeners.forEach(listener => listener(data));
  }

  /**
   * Add a listener to an event
   * @param eventType The event type to listen to
   * @param listener The callback to call when the event is emitted
   */   
  public on<T extends AdCompassEventType>(eventType: T, listener: EventCallback<T>) {
    this.ensureListenerArrayExists(eventType);
    this.addEventListener(eventType, listener);
  }

  private ensureListenerArrayExists<T extends AdCompassEventType>(eventType: T): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
  }

  private addEventListener<T extends AdCompassEventType>(eventType: T, listener: EventCallback<T>) {
    this.listeners.get(eventType)!.push(listener);
  }

  public off<T extends AdCompassEventType>(eventType: AdCompassEventType, listener: EventCallback<T>) {
    const offToListeners = this.listeners.get(eventType);
    if (offToListeners) {
      const existingListeners = this.listeners.get(eventType);

      if (existingListeners) {
        const filteredListeners = existingListeners.filter(
          (existingListener) => existingListener !== listener
        );

        this.listeners.set(eventType, filteredListeners);
      }
    }
  }
}
