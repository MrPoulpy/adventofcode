const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const mappedInput = [];

input.forEach((line,i) => {
  mappedInput[i] = [...line];
});

const makeSlope = (right, down) => {
  let count = 0;
  let [posX, posY] = [0,0];
  while(posY < mappedInput.length) {
    posX += right;
    posX %= mappedInput[0].length;
    posY += down;
    if (mappedInput[posY] && mappedInput[posY][posX] === '#') count += 1;
  }
  return count;
}

const part1 = () => {
 return makeSlope(3,1);
};

const part2 = () => {
  return makeSlope(1,1) * makeSlope(3,1) * makeSlope(5,1) * makeSlope(7,1) * makeSlope(1,2);
};

console.log('-> part1', part1());
console.log('-> part2', part2());
