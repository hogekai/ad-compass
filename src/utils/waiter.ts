export const waitForDomReady = (): Promise<void> => {
  return new Promise((resolve) => {
    if (document.readyState !== "loading") {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => resolve());
    }
  });
};
