export {};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s: string[]) {
  return s.reverse();
};

function reverse2(string: string[]) {
  let i = 0,
    j = string.length - 1;
  while (i < j) {
    [string[i], string[j]] = [string[j], string[i]];
    i++;
    j--;
  }
}

// function reverseString1(string: string) {
//   let i = 0,
//     j = string.length - 1;
//   let newStr = "";
//   while (i < j) {
//     // [string[i], string[j]] = [string[j], string[i]];
//     newStr[i] = string[i]
//     i++;
//     j--;
//   }
// }

function reverse3(string: string) {
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
}

const string = ["p", "h", "o", "n", "e"];
// console.log(reverseString(string));
// console.log("reverse", reverse2(string));
console.log("Pre-reversing, ", string);
reverse2(string);
console.log("post reversing: ", string);
