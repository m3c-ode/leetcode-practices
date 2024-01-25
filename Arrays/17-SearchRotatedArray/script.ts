/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 */

export function search(nums: number[], target: number): number {
  const recursiveSearch = (startIndex: number, endIndex: number) => {
    if (startIndex > endIndex) return -1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === nums[middleIndex]) {
      return middleIndex;
    } else {
      // If left if ascending and does contain the target
      if (nums[startIndex] <= nums[middleIndex]) {
        // if target inside, look in left side
        if (nums[startIndex] <= target && target < nums[middleIndex]) {
          return recursiveSearch(startIndex, middleIndex - 1);
        } else {
          // or go to right
          return recursiveSearch(middleIndex + 1, endIndex);
        }
      } else {
        if (nums[middleIndex + 1] <= target && target <= nums[endIndex]) {
          //  search right side
          return recursiveSearch(middleIndex + 1, endIndex);
        } else {
          // search left
          return recursiveSearch(startIndex, middleIndex - 1);
        }
      }
    }
  };

  return recursiveSearch(0, nums.length - 1);
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1, 3], 3));
console.log(search([5, 1, 3], 3));
console.log(search([5, 1, 3], 5));
console.log(search([6, 7, 1, 2, 3, 4, 5], 6));
console.log(search([3, 4, 5, 6, 7, 8, 1, 2], 2));
