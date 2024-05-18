import { AdBlockDetector } from "@/adblock-detector";
import { waitForDomReady } from "@/utils/waiter";
import {
  AdCompassNotificationPosition,
  AdCompassOptions,
  AdCompassSiteCategories,
} from "@/types";
import "@/style/ad-compass.css";
import { Notification } from "./notification";

const defaultOptions: AdCompassOptions = {
  delay: 7000,
  category: AdCompassSiteCategories.newsSite,
  position: AdCompassNotificationPosition.topCenter,
  daySpan: 7,
};

export default class AdCompass {
  static readonly SiteCategories = AdCompassSiteCategories;
  static readonly NotificationPosition = AdCompassNotificationPosition;

  private options: AdCompassOptions;

  public constructor(options?: Partial<AdCompassOptions>) {
    if (options) {
      this.options = { ...defaultOptions, ...options };
    } else {
      this.options = defaultOptions;
    }
  }

  public getOptions(): AdCompassOptions {
    return this.options;
  }

  public async run() {
    if (!this.isBrowser()) {
      console.error(
        "Server side is not supported. Please use library only on client side."
      );
      return;
    }

    if (!this.canExecuteScript()) {
      return ;
    }

    await waitForDomReady();
    const adBlock = await this.adBlockDetect();

    if (adBlock) {
      const notification = new Notification({
        category: this.options.category,
        position: this.options.position,
        message: this.options.message,
      });

      setTimeout(() => notification.notify(), this.options.delay);
    }
  }

  private async adBlockDetect(): Promise<boolean> {
    if (typeof AdBlockDetector === undefined) {
      return true;
    } else {
      const adBlockDetector = new AdBlockDetector();
      return await adBlockDetector.detect();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== "undefined";
  }

  private canExecuteScript(): boolean {
    const lastExecution = localStorage.getItem('adCompassLastExecution');
    if (lastExecution) {
      const lastDate = new Date(lastExecution);
      const currentDate = new Date();
      const day = this.options.daySpan * 24 * 60 * 60 * 1000;
  
      if (currentDate.getTime() - lastDate.getTime() < day) {
        return false;
      }
    }

    localStorage.setItem('adCompassLastExecution', new Date().toISOString());
    return true;
  }
}
