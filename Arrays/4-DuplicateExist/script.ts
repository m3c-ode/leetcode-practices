/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums: number[]) {
    let i = 0;
    while (nums.indexOf(nums[i], i + 1) === -1 && i < nums.length) {
        i++;
    }
    console.log('index', i);
    if (i < nums.length) return true;
    else return false;
};

var containsDuplicate2 = function (nums: number[]) {
    const set = new Set(nums);
    if (set.size !== nums.length) return true;
    else return false;
};

const nums = [1, 2, 3, 4];
// const exist = containsDuplicate1(nums);
const exist = containsDuplicate2(nums);
console.log(exist);