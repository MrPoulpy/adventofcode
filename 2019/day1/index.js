const fs = require('fs');
const inputMapped = fs.readFileSync('input.txt').toString().trim().split('\n');

const part1 = inputMapped.map(e => Math.floor(e / 3) - 2)
    .reduce((a, b) => a + b);

console.log(part1);

const calcFuel = (amount, sum = 0) => {
    const fuel = Math.floor(amount / 3) - 2;
    return fuel > 0 ? calcFuel(fuel, sum + fuel) : sum;
};

const part2 = inputMapped.map(e => calcFuel(e))
    .reduce((a, b) => a + b);

console.log(part2);
