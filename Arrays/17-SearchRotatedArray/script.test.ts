import { search } from "./script";

describe("search", () => {
  it("should return the correct index when target 0 is found in the rotated array [4, 5, 6, 7, 0, 1, 2] (index 4)", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  });

  it("should return -1 when target 3 is not found in the rotated array [4, 5, 6, 7, 0, 1, 2]", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  });

  it("should return -1 when target 0 is not found in the rotated array [1] (index 0)", () => {
    expect(search([1], 0)).toEqual(-1);
  });

  it("should return the correct index when target 3 is found in the rotated array [1, 3] (index 1)", () => {
    expect(search([1, 3], 3)).toEqual(1);
  });

  it("should return the correct index when target 3 is found in the rotated array [5, 1, 3] (index 2)", () => {
    expect(search([5, 1, 3], 3)).toEqual(2);
  });

  it("should return the correct index when target 5 is found in the rotated array [5, 1, 3] (index 0)", () => {
    expect(search([5, 1, 3], 5)).toEqual(0);
  });

  it("should return the correct index when target 6 is found in the rotated array [6, 7, 1, 2, 3, 4, 5] (index 0)", () => {
    expect(search([6, 7, 1, 2, 3, 4, 5], 6)).toEqual(0);
  });

  it("should return the correct index when target 2 is found in the rotated array [3, 4, 5, 6, 7, 8, 1, 2] (index 7)", () => {
    expect(search([3, 4, 5, 6, 7, 8, 1, 2], 2)).toEqual(7);
  });
});
