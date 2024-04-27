import { loadScript } from "@/utils/loader";

declare global {
  interface Window {
    adBlockDetect?: boolean;
  }
}
export class AdBlockDetector {
  static readonly DETECT_URL =
    "//cdn.jsdelivr.net/npm/prebid.js@latest/dist/not-for-prod/prebid.js";

  public async detect(): Promise<boolean> {
    try {
      await loadScript(AdBlockDetector.DETECT_URL);
      return window.adBlockDetect === true;
    } catch (e: unknown) {
      return true;
    }
  }
}
