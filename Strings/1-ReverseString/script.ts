/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s: string[]) {
    return s.reverse();
};

function reverse2(string: string[]) {
    // for (let i = 0; i < Math.trunc(string.length / 2); i++) {
    //     console.log(string);
    //     const temp = string[i];
    //     string[i] = string[string.length - 1 - i];
    //     string[string.length - 1 - i] = temp;
    // }
    let i = 0, j = string.length - 1;
    while (i < j) {
        // const temp = string[i];
        // string[i] = string[j];
        // string[j] = temp;
        // console.log('hello');
        // console.log("🚀 ~ file: script.ts:22 ~ reverse2 ~ [string[i], string[j]]:", [string[i], string[j]])
        [string[i], string[j]] = [string[j], string[i]];
        i++;
        j--;
    }
}

function reverse3(string: string) {
    let newStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr;
}


const string = ["p", "h", "o", "n", "e"];
// console.log(reverseString(string));
console.log('reverse', reverse2(string));
reverse2(string);
console.log(string);