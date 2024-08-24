export const AdCompassEventType = {
  AD_BLOCK_DETECT: "AD_BLOCK_DETECT",
  ALTERNATIVE_CONTENT_IMPRESSION: "ALTERNATIVE_CONTENT_IMPRESSION",
  ALTERNATIVE_CONTENT_CLICK: "ALTERNATIVE_CONTENT_CLICK",
  ERROR: "ERROR",
} as const;

export type AdCompassEventType =
  (typeof AdCompassEventType)[keyof typeof AdCompassEventType];

export interface AdCompassEventTypeMap {
  [AdCompassEventType.AD_BLOCK_DETECT]: boolean;
  [AdCompassEventType.ALTERNATIVE_CONTENT_IMPRESSION]: {};
  [AdCompassEventType.ALTERNATIVE_CONTENT_CLICK]: {};
  [AdCompassEventType.ERROR]: Error;
};