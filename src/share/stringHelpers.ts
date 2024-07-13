import type { Nullable } from "./types";

export function isNullOrEmpty(value: Nullable<string>): boolean {
  return !(typeof value === "string" && value.length > 0);
}
