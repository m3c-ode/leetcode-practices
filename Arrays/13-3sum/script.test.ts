import { threeSum } from "./script";

describe("ThreeSum", () => {
  it("should return [[-1,-1,2],[-1,0,1]]", () => {
    // the order in the result doesn't not matter, use expect.arrayContaining
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([-1, -1, 2]),
        expect.arrayContaining([-1, 0, 1]),
      ])
    );

    // expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    //   [-1, -1, 2],
    //   [-1, 0, 1],
    // ]);
  });
  it("should return [] for [0,1,1]", () => {
    expect(threeSum([0, 1, 1])).toStrictEqual([]);
  });
  it("should return [[0,0,0]] for [0,0,0]", () => {
    expect(threeSum([0, 0, 0])).toEqual(
      expect.arrayContaining([expect.arrayContaining([0, 0, 0])])
    );
  });
});
