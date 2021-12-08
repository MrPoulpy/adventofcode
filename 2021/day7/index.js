const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(',').map(i => parseInt(i)).sort((a,b) => a - b);

const part1 = () => {
    const mid = input[Math.floor(input.length / 2)];
    return input.reduce((a,b) => a + Math.abs(mid - b), 0);
}

const part2 = () => {
    const max = Math.max(...input);
    const conso = Array(max).fill(0);

    for (let i = 0; i < max; i += 1) {
        conso[i] = input.reduce((a,b) => {
            let fuel = 0;
            for (let j = 1; j <= Math.abs(i - b); j += 1) {
                fuel += j;
            }
            return a + fuel;
        }, 0);
    }

    return Math.min(...conso);
}

console.log('-> part1', part1());
console.log('-> part2', part2());
