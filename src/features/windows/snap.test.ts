import { invoke } from "@tauri-apps/api/core";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { snapWindowToEdge } from "./snap";

vi.mock("@tauri-apps/api/core", () => ({
  invoke: vi.fn(),
}));

const mockedInvoke = vi.mocked(invoke);

describe("window snap", () => {
  beforeEach(() => {
    mockedInvoke.mockReset();
  });

  test("invokes snap with window label", async () => {
    mockedInvoke.mockResolvedValue(undefined);

    await snapWindowToEdge("notepad-test-id");

    expect(invoke).toHaveBeenCalledWith("snap_window_to_edge", {
      label: "notepad-test-id",
    });
  });
});
