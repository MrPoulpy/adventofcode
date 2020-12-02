const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const part1 = () => {
  let result = 0;
  for(const line of input) {
    const count = line.substr(0, line.indexOf(' ')).split('-');
    const model = line.substr(line.indexOf(' ')+1).charAt(0);
    const passwd = line.substr(line.indexOf(': ')+1).split(' ').join('');
    const occurences = passwd.match(new RegExp(model, "g")) || [];
    if (occurences.length >= count[0] && occurences.length <= count[1]) result += 1;
  }
  return result;
};

const part2 = () => {
  let result = 0;
  for(const line of input) {
    const count = line.substr(0, line.indexOf(' ')).split('-');
    const model = line.substr(line.indexOf(' ')+1).charAt(0);
    const passwd = line.substr(line.indexOf(': ')+1).split(''); //i keep the first white space char, so it matches the non-0-index
    if ((passwd[count[0]] === model) !== (passwd[count[1]] === model)) result += 1;//logical XOR
  }
  return result;
};

console.log('-> part1', part1());

console.log('-> part2', part2());
