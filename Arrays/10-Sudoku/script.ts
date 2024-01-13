const isSudokuValid = function (board: string[][]) {
    const entries = /\d|\./;
    const digits = /\d/;
    // console.log(entries.test(9));
    const checkRow = (row: string[]) => {
        const map = new Map<string, number>();
        for (const char of row) {
            if (entries.test(char)) {
                map.set(char, map.get(char) ? map.get(char)! + 1 : 1);
            }
        }
        // console.log("🚀 ~ file: script.ts:7 ~ checkRows ~ map", map);
        for (const [char, occ] of map) {
            // console.log("🚀 ~ file: script.ts:14 ~ checkRows ~ [char, occ]", [char, occ]);
            // console.log("🚀 ~ file: script.ts:16 ~ checkRows ~ digits.test(char)", digits.test(char));
            // console.log("🚀 ~ file: script.ts:17 ~ checkRows ~ digits.test(char) && occ > 1", digits.test(char) && occ > 1);
            if (digits.test(char) && occ > 1) return false;
        }
        return true;
    };
    const checkColumns = (board: string[][]) => {
        for (let x = 0; x < board.length; x++) {
            let newRow: string[] = [];
            for (let y = 0; y < board[x].length; y++) {
                const element = board[y][x];
                newRow.push(element);
            }
            // console.log("🚀 ~ file: script.ts:30 ~ checkColumns ~ newRow", newRow);
            if (!checkRow(newRow)) return false;
            else continue;
        }
        return true;
    };
    const checkSquare = (board: string[][], row: number, col: number) => {
        let newRow: string[] = [];
        for (let x = (board.length / 3) * col; x < ((board.length / 3) * col) + 3; x++) {
            // console.log("🚀 ~ file: script.ts:37 ~ checkSquare ~ x", x);
            for (let y = (board[x].length / 3) * row; y < ((board[x].length / 3) * row) + 3; y++) {
                const element = board[x][y];
                newRow.push(element);
            }
        }
        // console.log("🚀 ~ file: script.ts:37 ~ checkSquare ~ newRow", newRow);
        if (!checkRow(newRow)) return false;
        else return true;
    };
    // check rows
    for (const row of board) {
        // console.log("🚀 ~ file: script.ts:18 ~ isSudokuValid ~ row", row);
        // console.log("🚀 ~ file: script.ts:25 ~ isSudokuValid ~ checkRows(row)", checkRows(row));
        if (!checkRow(row)) return false;
    }
    // check columns
    if (!checkColumns(board)) return false;

    // Check Squares
    for (let row = 0; row < board.length / 3; row++) {
        for (let col = 0; col < board[row].length / 3; col++) {
            if (!checkSquare(board, row, col)) return false;
        }
    }
    return true;
};

function isSudokuValid2(board: string[][]) {
    for (let i = 0; i < 9; ++i) {
        let row = new Set(), col = new Set(), cub = new Set();
        let rowIdx = 3 * Math.floor(i / 3), colIdx = 3 * (i % 3);
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] != '.' && row.has(board[i][j])) return false;
            row.add(board[i][j]);
            if (board[j][i] != '.' && col.has(board[j][i])) return false;
            col.add(board[j][i]);
            if (board[rowIdx + Math.floor(j / 3)][colIdx + (j % 3)] != '.' && cub.has(board[rowIdx + Math.floor(j / 3)][colIdx + (j % 3)])) return false;
            cub.add(board[rowIdx + Math.floor(j / 3)][colIdx + (j % 3)]);
        }
    }
    return true;
}

// const getBox = (i, j) => 3 * Math.floor(j / 3) + Math.floor(i / 3);
// const getListOfSets = (n) => new Array(n).fill().map(_ => new Set());

const mySudokuRes = (board: string[][]) => {
    for (let i = 0; i < board.length; i++) {
        // const element = board[i];
        const row = new Set(), col = new Set(), box = new Set();
        const boxRow = 3 * Math.floor(i / 3), boxCol = 3 * (i % 3);
        for (let j = 0; j < board[0].length; j++) {
            // const element = board[0][j];
            if (board[i][j] !== '.' && row.has(board[i][j])) return false;
            row.add(board[i][j]);
            if (board[j][i] !== '.' && col.has(board[j][i])) return false;
            col.add(board[j][i]);
            if (board[boxRow + Math.floor(j / 3)][boxCol + (j % 3)] !== '.' && box.has(board[boxRow + Math.floor(j / 3)][boxCol + (j % 3)])) return false;
            box.add(board[boxRow + Math.floor(j / 3)][boxCol + (j % 3)]);
        }

    }
};

const board =
    [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];

console.log(isSudokuValid(board));
console.log(isSudokuValid2(board));
console.log(mySudokuRes(board));