/**
 * @param {number[]} _digits
 * @return {number[]}
 */
var plusOne = function (digits: number[]): number[] {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1] += 1;
    } else {
        for (let index = digits.length - 1; index >= 0; index--) {
            let digit = digits[index];
            if (index === 0 && digits[index] === 9) {
                // digits[index] = 1;
                // digits.push(0);
                digits[index] = 0;
                digits.unshift(1);
                break;
            }
            if (digits[index] === 9) {
                digits[index] = 0;
                continue;
            } else {
                digits[index] += 1;
                break;
            }
        }
    }
    return digits;
};

// Recursive: need to create a new function that takes the array and the current index
function plusOneRecursive(digits: number[]): number[] {
    const checkAndAdd = (digits: number[], index: number): number[] => {
        // condition we reach first digit
        if (digits[index] === 9 && index === 0) {
            digits[index] = 1;
            digits.push(0);
            return digits;
        }
        if (digits[index] !== 9) {
            digits[index] += 1;
            return digits;
        }
        // if current digit is 9, assign current to 0 and test next one
        digits[index] = 0;
        return checkAndAdd(digits, index - 1);
    };
    return checkAndAdd(digits, digits.length - 1);
}

// Using join and split
function plusOneJoin(digits: number[]) {
    const num = BigInt(digits.join('')) + 1n;
    // return (num).toString().split('').map(num => +num);
    return Array.from(String(num), x => +x);

}

const digits = [1, 0, 9, 9, 9];
console.log(plusOneJoin(digits));
console.log(plusOneRecursive(digits));
console.log(plusOne(digits));