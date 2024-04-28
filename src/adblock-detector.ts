import { loadScript } from "@/utils/loader";

declare global {
  interface Window {
    adBlockDetect?: boolean;
  }
}
export class AdBlockDetector {
  static readonly DETECT_URL =
    "https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/prebid.js";

  public async detect(): Promise<boolean> {
    try {
      await loadScript(AdBlockDetector.DETECT_URL);
      return window?.adBlockDetect !== false;
    } catch (e: unknown) {
      return true;
    }
  }
}
