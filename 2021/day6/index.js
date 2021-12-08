const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(',').map(i => parseInt(i));

const part1 = () => {
    let pool = input;

    for (let day = 1 ; day <= 80 ; day += 1) {
        const zeroes = pool.filter(n => n === 0).length;
        pool = pool.map(n => n === 0 ? 6 : n - 1);
        for (let i = 0; i < zeroes; i += 1) {
            pool.push(8);
        }
    }

    return pool.length;
}

const part2 = () => {
    let pool = input.reduce((a,b) => {
        a[b] += 1;
        return a;
    }, new Array(8).fill(0));

    for (let day = 1 ; day <= 256 ; day += 1) {
        pool = pool.reduce((a,b,i) => {
            if (i === 0) {
                a[6] = b;
                a[8] = b;
            } else {
                a[i - 1] += b;
            }
            return a;
        }, new Array(8).fill(0));
    }

    return pool.reduce((a,b) => a + b);
}

console.log('-> part1', part1());
console.log('-> part2', part2());
