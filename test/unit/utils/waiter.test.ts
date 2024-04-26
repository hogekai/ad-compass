import { waitForDomReady } from '@/utils/waiter';
import { describe, expect, it } from "vitest";
import {
  mockReadyStateComplete,
  mockReadyStateInteractive,
  mockReadyStateLoading,
} from "../../mock/mockDocumentReadyState";

describe("waitForDomReady", () => {
  it("DOMの読み込みが完了していない場合は完了するまで待機すべき", async () => {
    mockReadyStateLoading();

    setTimeout(() => {
      mockReadyStateInteractive();
      document.dispatchEvent(new Event('DOMContentLoaded'));
    }, 1000);

    await waitForDomReady();

    expect(document.readyState).toBe("interactive");
  });

  it("DOMの読み込みが完了している場合はそのまま通すべき", async () => {
    mockReadyStateInteractive();

    await waitForDomReady();

    expect(document.readyState).toBe("interactive");
  });

  it("サブリソースの読み込みまで完了している場合はそのまま通すべき", async () => {
    mockReadyStateComplete();

    await waitForDomReady();

    expect(document.readyState).toBe("complete");
  });
});
