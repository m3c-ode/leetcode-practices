const myAtoi = function (s: string) {
    const res = parseInt(s.trim().match(/^\-\d+|^\+\d+|^\d+/) ? s.trim().match(/^\-\d+|^\+\d+|^\d+/)![0] : '0');
    console.log("🚀 ~ file: script.ts:3 ~ myAtoi ~ res", res);
    if (res <= -(2 ** 31)) return -(2 ** 31);
    if (res >= (2 ** 31) - 1) return (2 ** 31) - 1;
    return res;
};
const string = "   -42";
myAtoi(string);