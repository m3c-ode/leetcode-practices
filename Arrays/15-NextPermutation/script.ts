/* A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory. */
/**
 Do not return anything, modify nums in-place instead.
 */
// When we find the first element that is inferior to its successor at index I, it means the the following sub array is in a decreasing order.
// We've reached to point where there needs to be a change.
// we reverse the entire array from I OR we swap the extremities, then we need to order the array from I+1
export function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return;
  let i = nums.length - 2;
  while (i >= 0) {
    // As soon as we hit where the numbers aren't ascending
    if (nums[i] < nums[i + 1]) {
      // swap with the next superior one from the right side (already in ascending order) with this found number
      let temp = nums[i];
      for (let j = nums.length - 1; j > i; j--) {
        const element = nums[j];
        if (element <= temp) continue;
        // next superior found, swap
        nums[i] = nums[j];
        nums[j] = temp;
        break;
      }
      break;
    } else {
      i--;
    }
  }
  // Then we need to sort the part of the array that comes after this index.
  // Get the next part to re-order ascending, then sort it.
  const sortedTail = nums.slice(i + 1).sort((a, b) => a - b);
  // put it in place in the array, from the following index, its length is the difference between the positions
  nums.splice(i + 1, nums.length - 1 - i, ...sortedTail);
  console.log("Next permutation: ", nums);
}

// nextPermutation([2, 3, 1]);
// nextPermutation([1, 3, 2]);
// nextPermutation([
//   11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8, 15,
//   8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13, 7, 7, 2,
//   16, 24, 25, 2, 20, 12, 9, 20, 19,
// ]);

function nextPermutationManual(nums: number[]): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  // Sort the right side manually
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}
