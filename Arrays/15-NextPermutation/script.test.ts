import { nextPermutation } from "./script";

describe("next permutation", () => {
  it("Should permute [2, 3, 1] to [3,1,2]", () => {
    const nums = [2, 3, 1];
    const expectedPermutation = [3, 1, 2];
    nextPermutation(nums);
    expect(nums).toEqual(expectedPermutation);
  });
  it("Should permute [1, 3, 2] to [2,1,3]", () => {
    const nums = [1, 3, 2];
    const expectedPermutation = [2, 1, 3];
    nextPermutation(nums);
    expect(nums).toEqual(expectedPermutation);
  });
  it(`Should permute [11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8, 15,8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13, 7, 7, 2,16, 24, 25, 2, 20, 12, 9, 20, 19,] to [
      11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8,
      15, 8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13,
      7, 7, 2, 16, 24, 25, 2, 20, 12, 19, 9, 20,
    ]`, () => {
    const nums = [
      11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8,
      15, 8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13,
      7, 7, 2, 16, 24, 25, 2, 20, 12, 9, 20, 19,
    ];
    const expectedPermutation = [
      11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8,
      15, 8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13,
      7, 7, 2, 16, 24, 25, 2, 20, 12, 19, 9, 20,
    ];
    nextPermutation(nums);
    expect(nums).toEqual(expectedPermutation);
  });
});
