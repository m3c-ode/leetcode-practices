const strstr = function (haystack: string, needle: string) {
    if (haystack.includes(needle)) {
        return haystack.split(needle)[0].length;
    }
    return -1;
};
const strstr2 = function (haystack: string, needle: string) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};


const haystack = "mississippi", needle = "issip";
console.log(strstr(haystack, needle));