export class AdBlockDetector {
  private bannerIds: readonly string[];
  private bannerClasses: readonly string[];

  public constructor() {
    this.bannerIds = ["AdHeader", "AdContainer", "AD_Top", "homead", "ad-lead"];
    this.bannerClasses = ["adsbygoogle"];

    this.initialize();
  }

  private initialize() {
    const detectContainer = document.createElement("div");
    detectContainer.innerHTML = this.generateBannersString();
    document.body.append(detectContainer);
  }

  private generateBannersString(): string {
    let banners: string = "";

    banners += this.bannerIds
      .map((bannerId) => `<div id="${bannerId}"></div>`)
      .join("");
    banners += `<div class="${this.bannerClasses.join(" ")}"></div>`;

    return banners;
  }

  public detect(): boolean {
    return (
      this.bannerIds.some((bannerId) => this.checkVisibility("#" + bannerId)) ||
      this.checkVisibility("." + this.bannerClasses.join("."))
    );
  }

  private checkVisibility(selector: string): boolean {
    const element = document.querySelector<HTMLDivElement>(selector);

    if (element) {
      return element.offsetParent ? false : true;
    }

    return true;
  }
}
