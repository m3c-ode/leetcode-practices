/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]) {
    // Method 1:  loops trhough array
    // for (let index = 0; index < nums.length; index++) {
    //     const num1 = nums[index];
    //     console.log("🚀 ~ file: script.ts:8 ~ removeDuplicates ~ num1", num1);
    //     for (let j = index + 1; j < nums.length; j++) {
    //         let num2 = nums[j];
    //         console.log("🚀 ~ file: script.ts:11 ~ removeDuplicates ~ num2", num2);
    //         if (num1 === num2) continue;
    //         if (num2 > num1) {
    //             if (j === index + 1) break;
    //             else {
    //                 const temp = nums[index + 1];
    //                 nums[index + 1] = num2;
    //                 num2 = temp;
    //                 break;
    //             }
    //         }
    //     }
    // }
    // console.log(nums);
    // return nums.indexOf(Math.max(...nums)) + 1;

    //Method 2: use the Set data type
    const set = new Set(nums);
    let i = 0;
    set.forEach(num => {
        nums[i] = num;
        i++;
    });
    return set.size;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(nums);
console.log("🚀 ~ file: scripts.ts:28 ~ k", k);

// Solution offered
// var removeDuplicates = function (nums) {
//     let insertIndex = 1;
//     for (let i = 1; i < nums.length; i++) {
//         // We skip to next index if we see a duplicate element
//         if (nums[i - 1] != nums[i]) {
//             /* Storing the unique element at insertIndex index and incrementing
//                the insertIndex by 1 */
//             nums[insertIndex] = nums[i];
//             insertIndex++;
//         }
//     }
//     return insertIndex;
// };
