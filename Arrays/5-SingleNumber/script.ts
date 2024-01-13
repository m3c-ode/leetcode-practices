/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]) {
    if (nums.length === 1) return nums[0];
    // if (nums.length %2 === 0) return false
    nums.sort();
    let i = 0;
    while (nums.includes(nums[i], i + 1) && i < nums.length) {
        i = nums.lastIndexOf(nums[i]) + 1;
    }
    return nums[i];
    // if (i < nums.length) return nums[i];
    // else return false;
};


const singleNumber2 = (nums: number[]) => {
    var result = nums[0];
    for (var i = 1; i < nums.length; i++) {
        console.log("🚀 ~ file: script.ts:23 ~ singleNumber2 ~ i", i);
        console.log("🚀 ~ file: script.ts:25 ~ singleNumber2 ~ nums[i]", nums[i]);
        result ^= nums[i];
        console.log("🚀 ~ file: script.ts:24 ~ singleNumber2 ~ result ^= nums[i]", result ^= nums[i]);
    }
    console.log("🚀 ~ file: script.ts:28 ~ singleNumber2 ~ result", result);
    return result;

    /* 
    USING BITWISE XOR OPERATOR (USING CONSTANT SPACE )

To use this approach you first need to understand about Bitwise XOR operator.
Most of us who have a background in physics ( highschool level ) , are aware of the LOGIC GATES.
One of such gates is the XOR Gate :
According to this gate , the output is true , only if both the inputs are of opposite kind .
That is ,
A B Y
0 0 0
0 1 1
1 0 1
1 1 0

We apply the extended version of this gate in our bitwise XOR operator.
If we do "a^b" , it means that we are applying the XOR gate on the 2 numbers in a bitwise fashion ( on each of the corresponding bits of the numbers).
Similarly , if we observe ,

    A^A=0
    A^B^A=B
    (A^A^B) = (B^A^A) = (A^B^A) = B This shows that position doesn't matter.
    Similarly , if we see , a^a^a......... (even times)=0 and a^a^a........(odd times)=a

Google It for more details.

We apply the above observations :

    Traverse the array and take the Bitwise XOR of each element.
    Return the value.

Why does this work ??
Because , the elements with frequency=2 will result in 0. And then the only element with frequency=1 will generate the answer.
    */
};

function singleNumber3(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let i = 0;
    while (i < nums.length) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i];
        } else i++;
    }
    return 0;
};

function singleNumber4(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    let i = 0;
    while (nums.indexOf(nums[i], i + 1) !== -1 && i < nums.length) {
        console.log("🚀 ~ file: script.ts:79 ~ singleNumber4 ~ nums.indexOf(nums[i], i + 1):", nums.indexOf(nums[i], i + 1));
        console.log('index', i);
        i++;
    }
    return nums[i];
};

const nums = [1, 2, 1, 2, 3];
console.log('test', nums.lastIndexOf(1));
const res = singleNumber3(nums);
// console.log("🚀 ~ file: script.ts:88 ~ res:", res);
console.log(singleNumber(nums));
// console.log(1 ^ 2, 1 ^ 1);