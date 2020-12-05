const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(l => l.split('')).map(s => ({row: s.slice(0,7), col: s.slice(-3)}));

const calcSeat = (data, range) => {
  let arr = [0, range - 1];
  data.forEach(mov => {
    if (mov === "L" || mov === 'F') {
      arr[1] = (arr[1] - arr[0] + 1) / 2 + arr[0] - 1;
    }
    if (mov === "R" || mov === 'B') {
      arr[0] = (arr[1] - arr[0] + 1) / 2 + arr[0];
    }
  });
  return arr[0];
}

const part1 = () => {
  return Math.max(...input.map(s => [calcSeat(s.row, 128), calcSeat(s.col, 8)]).map(a => a[0] * 8 + a[1]));
};

const part2 = () => {
  let ids = input.map(s => [calcSeat(s.row, 128), calcSeat(s.col, 8)]).map(a => a[0] * 8 + a[1])
    .filter(v => v > 7); //remove first row

  return ids.find(v => !ids.includes(v+1) && v < part1()) + 1;


};

console.log('-> part1', part1());
console.log('-> part2', part2());
