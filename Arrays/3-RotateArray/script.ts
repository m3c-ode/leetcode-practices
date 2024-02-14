import "";
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums: number[], k: number) {
  k %= nums.length;
  console.log("🚀 ~ file: script.ts:8 ~ rotate1 ~ k", k);

  for (let index = 0; index < k; index++) {
    nums.unshift(nums.pop() as number);
  }
};

const nums = [-1, -100, 3, 99];
const k = 2;
rotate1(nums, k);
// console.log("🚀 ~ file: script.ts:15 ~ nums", nums);

function rotate2(nums: number[], k: number) {
  k %= nums.length;
  for (let index = 0; index < k; index++) {
    const last = nums[nums.length - 1];
    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = last;
  }
}

// rotate2(nums, k);

function rotate3(nums: number[], k: number) {
  const toAdd = nums.splice(nums.length - k, k);
  nums.splice(0, 0, ...toAdd);
}

// rotate3(nums, k);

console.log("🚀 ~ file: script.ts:29 ~ nums", nums);
