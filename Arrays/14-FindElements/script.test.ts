import { searchRange } from "./script";

describe("searchRange function", () => {
  it("Should return [3,4] for [5, 7, 7, 8, 8, 10] and target of 8", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  });
  it("Should return [-1,-1] for [5, 7, 7, 8, 8, 10] and target of 6 (does not exist)", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });
  it("Should return [-1,-1] for [] and target of 0 (empty array)", () => {
    expect(searchRange([], 0)).toEqual([-1, -1]);
  });
});
