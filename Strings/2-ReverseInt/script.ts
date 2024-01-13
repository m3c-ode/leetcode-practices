/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x: number) {
    // put extreme conditions
    if (x < 0) {
        // (x+'') woudl put it to string
        const res = parseInt(x.toString().split('').slice(1).reverse().join('')) * -1;
        if (res < -(2 ** 31)) {
            return 0;
        } else return res;
    }
    const res = parseInt(x.toString().split('').reverse().join(''));
    if (res > (2 ** 31)) {
        return 0;
    } else {
        return res;
    }
};

var reverse2 = function (x: number) {
    let rvs = 0;

    let original = x; // if x is negative the then storing the originl value
    if (x < 0) x = Math.abs(0 - x);// and converting it into positive

    while (x > 0) {
        let rem = x % 10;
        console.log("🚀 ~ file: script.ts:29 ~ reverse2 ~ rem", rem);
        rvs = rvs * 10 + rem;
        console.log("🚀 ~ file: script.ts:31 ~ reverse2 ~ rvs", rvs);
        x = Math.floor(x / 10);
        console.log("🚀 ~ file: script.ts:33 ~ reverse2 ~ x", x);
    } // reversing the number by performing operation

    if (rvs >= Math.pow(2, 31)) return 0; //if reversed number is greater than 32 bit integer then returning zero

    if (original < 0) return -rvs;//cheaking if original number is negative or not if yes then returning reversed value after converting it into negative
    return rvs;
};

// One line, but doesn't match extreme conditions
const reverse3 = (n: number) => (n < 0 ? -1 : 1) * +("" + Math.abs(n)).split(``).reverse().join(``);

const x = -123;
// console.log(reverse(x));
// console.log(reverse2(x));
console.log(reverse2(x));