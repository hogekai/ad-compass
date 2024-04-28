import {
  AdCompassNotificationPosition,
  AdCompassSiteCategories,
} from "@/types";
import { i18n } from "./i18n";

export class Notification {
  private category: AdCompassSiteCategories;
  private position: AdCompassNotificationPosition;
  private message?: string;

  private notificationDiv!: HTMLDivElement;

  public constructor({
    category,
    position,
    message,
  }: {
    category: AdCompassSiteCategories;
    position: AdCompassNotificationPosition;
    message?: string;
  }) {
    this.category = category;
    this.position = position;
    this.message = message;
  }

  public notify() {
    this.createNotification();
    document.body.appendChild(this.notificationDiv);
    this.setAutoClose();
  }

  private createNotification() {
    this.notificationDiv = document.createElement("div");
    this.notificationDiv.id = "ad-compass-notification";
    this.notificationDiv.className = "ad-compass-notification " + this.position;

    const bodyDiv = document.createElement("div");
    bodyDiv.className = "ad-compass-notification-body";

    const messageP = document.createElement("p");
    messageP.className = "ad-compass-notification-desc";
    messageP.innerHTML = this.message ?? this.getMessage();

    const footerDiv = document.createElement("div");
    footerDiv.className = "ad-compass-notification-footer";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className =
      "ad-compass-notification-button ad-compass-notification-close-button";
    closeButton.textContent = i18n.t("Close");
    closeButton.addEventListener("click", () => this.close());

    bodyDiv.appendChild(messageP);
    footerDiv.appendChild(closeButton);
    this.notificationDiv.appendChild(bodyDiv);
    this.notificationDiv.appendChild(footerDiv);
  }

  public close() {
    this.notificationDiv.remove();
  }

  private setAutoClose() {
    const CLOSE_TIME = 10000;

    setTimeout(() => {
      this.close();
    }, CLOSE_TIME);
  }

  private getMessage(): string {
    switch (this.category) {
      case AdCompassSiteCategories.newsSite:
        return i18n.t("newsSite");
      case AdCompassSiteCategories.educationalSite:
        return i18n.t("educationalSite");
      case AdCompassSiteCategories.lifestyleSite:
        return i18n.t("lifestyleSite");
      case AdCompassSiteCategories.entertainmentSite:
        return i18n.t("entertainmentSite");
      case AdCompassSiteCategories.technologySite:
        return i18n.t("technologySite");
      default:
        return i18n.t("newsSite");
    }
  }
}
