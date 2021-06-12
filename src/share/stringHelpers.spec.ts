import { isNullOrEmpty } from "./stringHelpers";
import { expect } from "@jest/globals";

describe("stringHelpers", () => {
  describe("isNullOrEmpty", () => {
    it("should return true if null", () => {
      const result = isNullOrEmpty(null);
      expect(result).toBeTruthy();
    });
    it("should return true if undefined", () => {
      const result = isNullOrEmpty(undefined);
      expect(result).toBeTruthy();
    });
    it("should return true if empty", () => {
      const result = isNullOrEmpty("");
      expect(result).toBeTruthy();
    });
    it("should return false if has string", () => {
      const result = isNullOrEmpty("hello world");
      expect(result).toBeFalsy();
    });
  });
});
