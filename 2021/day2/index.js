const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const part1 = () => {
  let position = {x: 0, y: 0};
  for (const move of input) {
    let [direction, value] = move.split(' ');
    switch (direction) {
      case 'up':
        position.y -= parseInt(value);
        break;
      case 'down':
        position.y += parseInt(value);
        break;
      case 'forward':
        position.x += parseInt(value);
        break;
    }
  }
  return position.x * position.y;
}

const part2 = () => {
  let position = {x: 0, y: 0, aim: 0};
  for (const move of input) {
    let [direction, value] = move.split(' ');
    switch (direction) {
      case 'up':
        position.aim -= parseInt(value);
        break;
      case 'down':
        position.aim += parseInt(value);
        break;
      case 'forward':
        position.x += parseInt(value);
        position.y += parseInt(value) * position.aim;
        break;
    }
  }
  return position.x * position.y;
}

console.log('-> part1', part1());
console.log('-> part2', part2());
