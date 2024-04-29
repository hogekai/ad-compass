import AdCompass from "@/ad-compass";
import {
  AdCompassNotificationPosition,
  AdCompassSiteCategories,
} from "@/types";
import { waitForDomReady } from "@/utils/waiter";
import { describe, expect, it, vi } from "vitest";
import { mockAdBlocker } from 'test/mock/mockAdBlocker';
import { Notification } from "@/notification";

vi.mock('@/utils/waiter', () => {
  return {
    waitForDomReady: vi.fn()
  }
});

describe("AdCompass", () => {
  describe("オプション", () => {
    it("オプションを指定しないとき、デフォルトオプションが設定されているべき", () => {
      const adCompass = new AdCompass();
      expect(adCompass.getOptions()).toMatchObject({
        delay: 7000,
        category: AdCompassSiteCategories.newsSite,
        position: AdCompassNotificationPosition.topCenter,
      });
    });

    it("オプションを指定するとき、デフォルトオプションが上書きされるべき", () => {
      const adCompass = new AdCompass({
        delay: 8000,
      });

      expect(adCompass.getOptions()).toMatchObject({
        delay: 8000,
        category: AdCompassSiteCategories.newsSite,
        position: AdCompassNotificationPosition.topCenter,
      });
    });
  });

  describe("`run`", () => {
    it("サーバーサイドで実行された場合、エラーをログに記録して返すべき", async () => {
      const originalWindow = globalThis.window;
      (globalThis as any).window = undefined;
      const consoleSpy = vi.spyOn(console, "error");

      const adCompass = new AdCompass();

      await adCompass.run();

      expect(consoleSpy).toHaveBeenCalledWith(
        "Server side is not supported. Please use library only on client side."
      );
      consoleSpy.mockRestore();
      globalThis.window = originalWindow;
    });

    it("クライアントサイド環境で実行された場合、問題なく実行されるべき", async () => {
      const consoleSpy = vi.spyOn(console, "error");
      mockAdBlocker();

      const adCompass = new AdCompass({ delay: 0 });
      await adCompass.run();

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });
});
