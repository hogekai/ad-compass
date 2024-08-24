export type EventCallback = (data: any) => void;

export class EventEmitter {
  private listeners: Map<string, EventCallback[]>;

  constructor() {
    this.listeners = new Map();
  }

  public emit(event: string, data: any) {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.forEach((listener) => listener(data));
    }
  }

  public on(event: string, listener: EventCallback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)?.push(listener);
  }

  public off(event: string, listener: EventCallback) {
    const offToListeners = this.listeners.get(event);
    if (offToListeners) {
      const existingListeners = this.listeners.get(event);

      if (existingListeners) {
        const filteredListeners = existingListeners.filter(
          (existingListener) => existingListener !== listener
        );

        this.listeners.set(event, filteredListeners);
      }
    }
  }
}
