const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n\n');

const part1 = () => {
  return input.map(v => v.replace(/\n/g, "")).reduce((a,b) => a + new Set(b).size, 0);
};

const part2 = () => {
  return input.map(grp => {
    const people = grp.split('\n').map(l => l.split(''));
    const count = new Map();
    for (const ans of people) {
      for (const a of ans) {
        count.set(a, 1 + (count.get(a) || 0))
      }
    }
    return [...count.values()].filter(a => a === people.length).length;
  }).reduce((a,b) => a + b, 0);
};

console.log('-> part1', part1());
console.log('-> part2', part2());
