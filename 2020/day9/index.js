const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(n => +n);

const findInvalid = (numbers, preamble) => {
  for (const number in numbers) {
    if (number >= preamble) {
      const numList = numbers.slice(number - preamble, number);
      const adds = numList.some((num, index) => {
        const match = numList.indexOf(numbers[number] - num);
        return match !== num && match !== -1;
      });
      if (!adds) return numbers[number];
    }
  }
}

const part1 = () => {
  return findInvalid(input, 25);
};

const part2 = () => {
  const number = findInvalid(input, 25);
  let sum = [];
  let i = 0;
  let startIndex = 0;

  while (true) {
    sum.push(input[i]);
    const currentSum = sum.reduce((a,b) => a + b);

    if (currentSum === number) {
      const sortedSum = sum.sort((a,b) => a - b);
      return sortedSum[0] + sortedSum[sortedSum.length - 1];
    } else if(currentSum > number) {
      startIndex++;
      i = startIndex;
      sum = [];
    } else {
      i += 1;
    }
  }
};

console.log('-> part1', part1());
console.log('-> part2', part2());
