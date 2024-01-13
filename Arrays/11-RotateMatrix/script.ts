const rotateMatrix = function (matrix: number[][]) {
    const indexMax = matrix.length - 1;
    // for (let x = 0; x <= indexMax; x++) {
    for (let y = 0; y <= Math.floor(indexMax / 2) + indexMax % 2; y++) {
        // const element = matrix[y];
        for (let x = y; x <= indexMax - x; x++) {
            console.log("🚀 ~ file: script.ts:7 ~ x", x);
            // const element = matrix[y][x];
            // const lastDigit = matrix[indexMax - x][y];
            // matrix[indexMax - x][y] = matrix[indexMax - x][indexMax - y];
            // matrix[indexMax - x][indexMax - y] = matrix[x][indexMax - y];
            // matrix[x][indexMax - y] = matrix[x][y];
            // matrix[x][y] = lastDigit;

            // const temp = matrix[y][indexMax - x];
            // matrix[y][indexMax - x] = matrix[y][x];
            // matrix[y][x] = matrix[indexMax - y][x];
            // matrix[indexMax - y][x] = matrix[indexMax - x][indexMax - y];
            // matrix[indexMax - x][indexMax - y] = temp;



            console.log(matrix);
        }
    }
    console.log(matrix);
    return matrix;
};

const rotateMatrix2 = (matrix: number[][]) => {
    const indexMax = matrix.length - 1;
    for (let y = 0; y < Math.floor((indexMax + 1) / 2) + (indexMax + 1) % 2; y++) {
        console.log("🚀 ~ file: script.ts:33 ~ rotateMatrix2 ~ y", y);
        // const element = matrix[y];
        // let tempRow: number[] = []
        for (let x = 0; x < Math.floor((indexMax + 1) / 2); x++) {
            console.log("🚀 ~ file: script.ts:36 ~ rotateMatrix2 ~ x", x);
            // const element = matrix[0][x];
            // tempRow[x] = matrix[x][indexMax - y]
            // const temp = matrix[x][indexMax - y];
            // matrix[x][indexMax - y] = matrix[y][x];
            // matrix[y][x] = matrix[indexMax - x][y];
            // matrix[indexMax - x][y] = matrix[indexMax - x][indexMax - y];
            // matrix[indexMax - x][indexMax - y] = temp;

            const temp = matrix[indexMax - x][y];
            matrix[indexMax - x][y] = matrix[indexMax - y][indexMax - x];
            matrix[indexMax - y][indexMax - x] = matrix[x][indexMax - y];
            matrix[x][indexMax - y] = matrix[y][x];
            matrix[y][x] = temp;

            console.log(matrix);
        }
    }
};

const rotateMatrix3 = (matrix: number[][]) => {
    const indexMax = matrix.length - 1;
    const len = matrix.length;
    for (let y = 0; y < Math.floor(matrix.length / 2); y++) {
        for (let x = 0; x < Math.floor(matrix.length / 2) + (matrix.length % 2); x++) {
            const temp = matrix[y][x];
            matrix[y][x] = matrix[indexMax - x][y];
            matrix[indexMax - x][y] = matrix[indexMax - y][indexMax - x];
            matrix[indexMax - y][indexMax - x] = matrix[x][indexMax - y];
            matrix[x][indexMax - y] = temp;

            console.log(matrix);
        }
    }
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix1 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
// const newMatrix = rotateMatrix(matrix);
// console.log("🚀 ~ file: script.ts:21 ~ newMatrix", newMatrix);
rotateMatrix3(matrix);
