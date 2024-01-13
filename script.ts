// run either ts-node script.ts or nodemon script.ts in console

function reverString(string: string): string {
    let i = 0, j = string.length - 1;
    let newStr = string.split("");
    while (i < j) {
        [newStr[i], newStr[j]] = [newStr[j], newStr[i]];
        i++;
        j--;
    }
    return newStr.join("");
}

const string = 'hello';
console.log(reverString(string));
