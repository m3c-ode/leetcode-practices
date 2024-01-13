/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]) {
    let zeroesCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeroesCount++;
    }
    for (let i = 0; i < zeroesCount; i++) {
        for (let j = 0; j < nums.length; j++) {
            // const element = nums[j];
            if (nums[j] === 0) {
                let zero = nums.splice(j, 1);
                nums.push(zero[0]);
                // zeroes.push(zero[0]);
                console.log(nums);
                // console.log(zeroes);
                break;
            }
        }
    }
};

function moveZeroes2(nums: number[]) {
    let i = 0, j = 1;
    while (j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {


            nums[i] = nums[j];
            nums[j] = 0;
            i++;
        }
        if (nums[i] !== 0) {
            i++;
        }
        j++;
    }
}

const nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
moveZeroes2(nums);
console.log("🚀 ~ file: scripts.ts:14 ~ nums", nums)

