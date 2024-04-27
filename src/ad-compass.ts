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
  position: AdCompassNotificationPosition.bottomCenter,
};

export default class AdCompass {
  private options: AdCompassOptions;

  public constructor(options?: Partial<AdCompassOptions>) {
    this.options = { ...defaultOptions, ...options };
  }

  public async run() {
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
}
