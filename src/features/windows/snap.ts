import { invoke } from "@tauri-apps/api/core";

export function snapWindowToEdge(label: string): Promise<void> {
  return invoke("snap_window_to_edge", { label });
}
