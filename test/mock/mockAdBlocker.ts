import { AdBlockDetector } from "@/adblock-detector";
import { vi } from "vitest";

export const mockAdBlocker = () => {
  vi.spyOn(document.head, "appendChild").mockImplementation((node: Node) => {
    const element = node as HTMLScriptElement;
    setTimeout(
      () =>
        element.onerror &&
        element.onerror(
          new ErrorEvent("error", {
            message: `Script load error for ${AdBlockDetector.DETECT_URL}`,
          })
        ),
      0
    );
    return node;
  });
};
