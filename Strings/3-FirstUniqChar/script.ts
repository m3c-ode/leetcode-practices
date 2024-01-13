const firstUniqChar = function (string: string) {
    for (let i = 0; i < string.length; i++) {
        let strToSearch = string.slice(0, i) + string.slice(i + 1);
        console.log("🚀 ~ file: script.ts:4 ~ firstUniqChar ~ strToSearch", strToSearch);
        if (strToSearch.indexOf(string[i]) === -1) return string.indexOf(string[i]);
    }
    return -1;
};

const firstUniqChar2 = (string: string) => {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) return string.indexOf(string[i]);
    }
    return -1;
};

const firstUniqCharMap = (string: string) => {
    const map = new Map<string, number>();
    for (let i = 0; i < string.length; i++) {
        if (!map.has(string[i])) map.set(string[i], 1);
        else map.set(string[i], + map.get(string[i])! + 1);
    }
    for (const [char, occ] of map) {
        if (occ === 1) return string.indexOf(char);
    }
};

const string = "loveleetcode";
console.log(firstUniqChar(string));