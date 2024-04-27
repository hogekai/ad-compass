export type AdCompassOptions = {
  delay: number;
  category: AdCompassSiteCategories;
  position: AdCompassNotificationPosition;
  message?: string;
};

export enum AdCompassSiteCategories {
  newsSite,
  entertainmentSite,
  educationalSite,
  lifestyleSite,
  technologySite,
}

export enum AdCompassNotificationPosition {
  topLeft = "top-left",
  topCenter = "top-center",
  topRight = "top-right",
  bottomLeft = "bottom-left",
  bottomCenter = "bottom-center",
  bottomRight = "bottom-right",
}
