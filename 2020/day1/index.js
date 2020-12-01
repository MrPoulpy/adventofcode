const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(i => parseInt(i));

const part1 = () => {
  for(const num1 of input) {
    for(const num2 of input) {
      if (num1 + num2 === 2020) return num1 * num2;
    }
  }
}

const part2 = () => {
  for(const num1 of input) {
    for(const num2 of input) {
      for(const num3 of input) {
        if (num1 + num2 + num3 === 2020) return num1 * num2 * num3;
      }
    }
  }
}

console.log('-> part1', part1());
console.log('-> part2', part2());

/*---------
PART1 : I went first with only one iteration, but couldn't think of a good way to transpose it for part2
const array = [];
for(let num of input) {
  num = parseInt(num);
  let wanted = 2020 - num;
  let result = array.find(n => n === wanted);
  if (!result) {
    array.push(num);
  } else {
    console.log('-> part1', result * num);
  }
}
--------*/
