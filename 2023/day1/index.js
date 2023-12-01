const fs = require('fs');
const input = fs.readFileSync('2023/day1/input.txt').toString().trim().split('\n');

const part1 = () => {
  return input.map((line) => {
    return line.split('').filter((char) => parseInt(char));
  }).reduce((acc, cur) => {
    return acc + parseInt((cur[0].toString() + cur.pop().toString()))
  }, 0);
}

const part2 = () => {
  return 0;
}

module.exports = {part1: part1(), part2: part2()};
