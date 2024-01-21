/*
34. Find First and Last Position of Element in Sorted Array
Medium
Topics
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity. */

function searchRange(nums: number[], target: number): number[] {
  const res: number[] = [];
  if (nums.length === 0) return [-1, -1];

  // Search for starting position, from left
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      res[0] = mid;
      right = mid - 1; // searches left half
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  //ending position
  (left = 0), (right = nums.length - 1);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      res[1] = mid;
      left = mid + 1; // searches left half
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (res.length === 0) return [-1, -1];
  return res;
}

const testNums = [5, 7, 7, 8, 8, 10];

console.log(searchRange(testNums, 8));
