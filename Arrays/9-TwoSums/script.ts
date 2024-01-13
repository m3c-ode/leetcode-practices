/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const twoSumsMap = (nums: number[], target: number) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
};

const nums = [3, 2, 4];
const target = 6;
// const res = twoSum(nums, target);
// console.log("🚀 ~ file: script.ts:20 ~ res", res);
const res2 = twoSumsMap(nums, target);
console.log("🚀 ~ file: script.ts:32 ~ res2", res2);
