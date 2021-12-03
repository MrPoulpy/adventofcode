const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(i => i.split(''));

const getMostBits = (list) => {
  let gamma = [];
  let epsilon = [];
  for (let i = 0; i < list[0].length; i++) {
    const bit = list.reduce((a,b) => a + parseInt(b[i]), 0) >= (list.length / 2) ? "1" : "0";
    gamma.push(bit);
    epsilon.push(!+bit ? "1" : "0");
  }

  return { gamma, epsilon };
}

const part1 = () => {
  const { gamma, epsilon } = getMostBits(input);
  return parseInt(gamma.join(""),2) * parseInt(epsilon.join(""),2);
}

const part2 = () => {
  let o2 = input;
  let co2 = input;
  for (let i = 0; i < input[0].length; i++) {
    if (o2.length > 1) {
      const { gamma } = getMostBits(o2);
      o2 = o2.filter(el => gamma[i] === el[i]);
    }
    if (co2.length > 1) {
      const { gamma } = getMostBits(co2);
      co2 = co2.filter(el => gamma[i] !== el[i]);
    }
  }
  return parseInt(o2[0].join(""), 2) * parseInt(co2[0].join(""), 2);
}

console.log('-> part1', part1());
console.log('-> part2', part2());
