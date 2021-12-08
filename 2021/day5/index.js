const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(l => {
    const [part1, part2] = l.split(' -> ');
    return [...part1.split(',').map(i => parseInt(i)), ... part2.split(',').map(i => parseInt(i))];
});
const matrix = Array(1000).fill(null).map(() => Array(1000).fill(0));

const addPointX = (x1, x2, y) => {
    const val1 = x1 < x2 ? x1 : x2;
    const val2 = x1 < x2 ? x2 : x1;
    for (let x = val1; x <= val2; x++) {
        matrix[y][x] += 1;
    }
}

const addPointY = (y1, y2, x) => {
    const val1 = y1 < y2 ? y1 : y2;
    const val2 = y1 < y2 ? y2 : y1;
    for (let y = val1; y <= val2; y++) {
        matrix[y][x] += 1;
    }
}

const addPoint = (x1, y1, x2, y2) => {
    const val1 = y1 < y2 ? y1 : y2;
    const val2 = y1 < y2 ? y2 : y1;
    let x = x1;

    if (y1 < y2) {
        for (let y = val1; y <= val2; y += 1) {
            matrix[y][x] += 1;
            x += x1 > x2 ? -1 : 1;
        }
    } else {
        for (let y = val2; y >= val1; y -= 1) {
            matrix[y][x] += 1;
            x += x1 > x2 ? -1 : 1;
        }
    }
}

const part1 = () => {
    input.forEach(([x1, y1, x2, y2]) => {
        if (x1 === x2) {
            addPointY(y1, y2, x1);
        } else if (y1 === y2) {
            addPointX(x1, x2, y1);
        }
    });

    return matrix.reduce((a,b) => a + b.filter(l => l >= 2).reduce(c => c + 1, 0), 0);
}

const part2 = () => {
    input.forEach(([x1, y1, x2, y2]) => {
        if (x1 === x2) {
            addPointY(y1, y2, x1);
        } else if (y1 === y2) {
            addPointX(x1, x2, y1);
        } else {
            addPoint(x1, y1, x2, y2);
        }
    });

    return matrix.reduce((a,b) => a + b.filter(l => l >= 2).reduce(c => c + 1, 0), 0);
}

// console.log('-> part1', part1());
console.log('-> part2', part2());
