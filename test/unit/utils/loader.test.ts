import { loadScript } from "@/utils/loader";
import { describe, expect, it, vi } from "vitest";

describe("loadScript", () => {
  it("指定されたスクリプトが正常に読み込まれるべき", async () => {
    document.head.innerHTML = "";
    const src = "https://example.com/script.js";
    const mockAppendChild = vi
      .spyOn(document.head, "appendChild")
      .mockImplementation((node: Node) => {
        const element = node as HTMLScriptElement;
        setTimeout(
          () => element.onload && element.onload(new Event("load")),
          0
        );
        return node;
      });

    await loadScript(src);

    expect(mockAppendChild).toHaveBeenCalled();
    const appendedScript = mockAppendChild.mock
      .calls[0][0] as HTMLScriptElement;
    expect(appendedScript.src).toBe(src);
    expect(appendedScript.async).toBeTruthy();
  });

  it("スクリプトの読み込みに失敗した場合にエラーを投げるべき", async () => {
    document.head.innerHTML = "";
    const src = "https://example.com/fail.js";
    vi.spyOn(document.head, "appendChild").mockImplementation((node: Node) => {
      const element = node as HTMLScriptElement;
      setTimeout(
        () =>
          element.onerror &&
          element.onerror(
            new ErrorEvent("error", {
              message: `Script load error for ${src}`,
            })
          ),
        0
      );
      return node;
    });

    await expect(loadScript(src)).rejects.toThrow(
      `Script load error for ${src}`
    );
  });
});
