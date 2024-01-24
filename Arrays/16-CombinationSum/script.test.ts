import { combinationSum } from "./script";

describe("Combination sum", () => {
  it("Should return [ [ 2, 2, 3 ], [ 7 ] ] for candidates [2, 3, 6, 7] and target 7)", () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual(
      expect.arrayContaining([[2, 2, 3], [7]])
    );
  });
  it("Should return [[2,2,2,2],[2,3,3],[3,5]] for candidates = [2,3,5], target = 8)", () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual(
      expect.arrayContaining([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ])
    );
  });
  it("Should return [] for candidates = [2], target = 1)", () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });
});
