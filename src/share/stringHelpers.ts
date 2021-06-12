export function isNullOrEmpty(value: string | null | undefined): boolean {
  return !(typeof value === "string" && value.length > 0);
}
