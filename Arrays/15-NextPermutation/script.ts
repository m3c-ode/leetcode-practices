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
function nextPermutationMine(nums: number[]): void {
  let swapperIndex = nums.length - 1;
  let i = nums.length - 2;
  while (i >= 0) {
    // As soon as we hit where the numbers aren't ascending
    if (nums[i] < nums[i + 1]) {
      // swap the extremities, from this found Index with the end of the array
      let temp = nums[i];
      nums[i] = nums[nums.length - 1];
      nums[nums.length - 1] = temp;
      break;
    } else {
      i--;
    }
  }
  // Then we need to sort the part of the array that comes after this index.
  // Get the next part to re-order ascending, then sort it.
  const sortedTail = nums.slice(i + 1).sort();
  // put it in place in the array, from the following index, its length is the difference between the positions
  nums.splice(i + 1, nums.length - 1 - i, ...sortedTail);
}
