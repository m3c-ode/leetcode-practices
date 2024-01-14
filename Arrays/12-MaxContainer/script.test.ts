import { maxArea } from "./script";

describe("MaxContainer", () => {
  test("should return 49", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  it("should return 1", () => {
    expect(maxArea([1, 1])).toBe(1);
  });
  it("should return 16", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });
  it("should return 2", () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });
});
