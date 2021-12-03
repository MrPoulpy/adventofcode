const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(i => parseInt(i));

const part1 = () => {
  return input.filter((measure, index) => index >= 1 && measure > input[index - 1]).length;
}

const part2 = () => {
  return input.filter((measure, index) => index >= 3 && measure > input[index - 3]).length;
}

console.log('-> part1', part1());
console.log('-> part2', part2());
