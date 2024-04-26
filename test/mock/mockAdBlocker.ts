export const mockAdBlocker = () => {
  const blockAdIds = ["AdHeader", "AdContainer", "AD_Top", "homead", "ad-lead"];
  const blockAdClasses = ["adsbygoogle"];

  blockAdIds.forEach((blockAdId) => {
    const ad = document.querySelector<HTMLElement>("#" + blockAdId);
    if (ad) {
      ad.style.display = "none";
    }
  });

  blockAdClasses.forEach((blockAdClass) => {
    const ad = document.querySelector<HTMLElement>("." + blockAdClass);
    if (ad) {
      ad.style.display = "none";
    }
  });
};
