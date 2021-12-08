const fs = require('fs');
const [inputNumbers, ...inputBoards] = fs.readFileSync('input.txt').toString().trim().split('\n\n');
const numbers = inputNumbers.split(',').map(i => parseInt(i));
let boards = inputBoards.map(board => board.split('\n').map(row => row.split(' ').map(i => {
    return { drawn: false, val: parseInt(i) };
}).filter(v => !Number.isNaN(v.val))));

const rotate = matrix => matrix.map((row, i) => row.map((val, j) => matrix[matrix.length - 1 - j][i]));

const hasBingo = (board) => {
    const horizontal = board.filter(row => row.every(v => v.drawn)).length > 0;
    const vertical = rotate(board).filter(row => row.every(v => v.drawn)).length > 0;
    return horizontal || vertical;
}

const draw = (number) => {
    boards = boards.map(board => board.map(row => row.map(v => {
        if (v.val === number) {
            v.drawn = true;
        }
        return v;
    })));
}

const part1 = () => {
    let lastDrawn;
    let winningBoard;
    numbers.forEach(n => {
        if (!lastDrawn) {
            draw(n);
            winningBoard = boards.find(b => hasBingo(b));
            if (winningBoard) {
                lastDrawn = n;
            }
        }
    })

    return winningBoard.reduce((a,b) => a + b.filter(v => !v.drawn).reduce((c,d) => c + d.val, 0), 0) * lastDrawn;
}

const part2 = () => {
    let lastDrawn;
    let losingBoard;
    numbers.forEach(n => {
        if (!lastDrawn) {
            draw(n);
            if (boards.filter(b => hasBingo(b)).length === boards.length - 1) {
                losingBoard = boards.find(b => !hasBingo(b));
            }
            if (losingBoard && hasBingo(losingBoard)) {
                lastDrawn = n;
            }
        }
    })

    return losingBoard.reduce((a,b) => a + b.filter(v => !v.drawn).reduce((c,d) => c + d.val, 0), 0) * lastDrawn;
}

console.log('-> part1', part1());
console.log('-> part2', part2());
