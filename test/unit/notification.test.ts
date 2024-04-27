import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Notification } from "@/notification"; // Notification クラスのパスを適切に設定
import {
  AdCompassSiteCategories,
  AdCompassNotificationPosition,
} from "@/types";
import { i18n } from "@/i18n";

describe("Notification", () => {
  let notification: Notification;
  const mockCategory = AdCompassSiteCategories.newsSite;
  const mockPosition = AdCompassNotificationPosition.topRight;
  const mockMessage = "Test message";

  beforeEach(() => {
    document.body.innerHTML = "";
    notification = new Notification({
      category: mockCategory,
      position: mockPosition,
      message: mockMessage,
    });
  });

  it("通知が適切に生成されるべき", () => {
    notification.notify();
    const notificationDiv = document.getElementById("ad-compass-notification");
    expect(notificationDiv).toBeTruthy();
    expect(notificationDiv?.className).toContain(mockPosition);
  });

  it("デフォルトメッセージが適切に設定されるべき", () => {
    const noMessageNotification = new Notification({
      category: mockCategory,
      position: mockPosition,
    });
    noMessageNotification.notify();
    const messageP = document.querySelector(".ad-compass-notification-desc");
    expect(messageP?.innerHTML).toBe(i18n.t('newsSite'));
  });

  it("カスタムメッセージが表示されるべき", () => {
    notification.notify();
    const messageP = document.querySelector(".ad-compass-notification-desc");
    expect(messageP?.innerHTML).toBe(mockMessage);
  });
});
