const longestComPrefix = function (words: string[]) {
    if (words.length === 1) return words[0];
    words.sort((a, b) => {
        return a.length - b.length;
    });
    let ref = words[0];
    console.log("🚀 ~ file: script.ts:7 ~ longestComPrefix ~ ref", ref);
    if (words[0] === "") return "";
    let validIndex = 1;
    for (let j = words[0].length; j >= 0; j--) {
        if (j === 0) return "";
        for (let i = validIndex; i < words.length; i++) {
            let word = words[i];
            console.log("🚀 ~ file: script.ts:9 ~ longestComPrefix ~ word", word);
            if (ref[0] !== word[0]) return "";
            console.log("🚀 ~ file: script.ts:16 ~ longestComPrefix ~ ref.slice(0, j)", ref.slice(0, j));
            // if (i === words.length - 1) return ref.slice(0, j);
            console.log("🚀 ~ file: script.ts:18 ~ longestComPrefix ~ word.includes(ref.slice(0, j)) && word[0] === ref[0]", word.includes(ref.slice(0, j)) && word[0] === ref[0] && word[j - 1] === ref[j - 1]);
            if (word.includes(ref.slice(0, j)) && word[0] === ref[0] && word[j - 1] === ref[j - 1]) {
                if (i === words.length - 1) return ref.slice(0, j);
                validIndex = i + 1;
                continue;
            } else break;
        }
    }
};

const strs = ["abca", "aba", "aaab"];
console.log(longestComPrefix(strs));
// console.log([""].length);

function longestCommonPrefix2(strs: string[]): string {
    if (strs.length === 1) return strs[0];
    strs.sort((a, b) => a.length - b.length);
    console.log("🚀 ~ file: script.ts:3 ~ longestCommonPrefix ~ strs", strs);
    const ref = strs[0];
    let len = ref.length - 1;
    for (let i = 1; i < strs.length; i++) {
        // const element = strs[i];
        if (strs[i][0] !== ref[0]) return "";
        for (let j = 0; j <= len; j++) {
            console.log("🚀 ~ file: script.ts:12 ~ longestCommonPrefix ~ strs[i]", strs[i]);
            console.log("🚀 ~ file: script.ts:12 ~ longestCommonPrefix ~ ref[j]", ref[j]);
            console.log("🚀 ~ file: script.ts:12 ~ longestCommonPrefix ~ strs[i][j]", strs[i][j]);
            // const element = ref[j];
            if (strs[i][j] === ref[j]) {
                continue;
            }
            else {
                len = j - 1;
                break;
            }
        }

    }
    return ref.slice(0, len + 1);
}