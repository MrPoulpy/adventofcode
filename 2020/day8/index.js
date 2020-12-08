const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(l => l.split(" "));

const runBootup = (cmds) => {
  let acc = 0;
  let index = 0;
  while (cmds[index] && !cmds[index].executed) {
    let {cmd, pos} = cmds[index];
    cmds[index].executed = true;

    switch (cmd) {
      case 'acc': acc += pos; index += 1; break;
      case 'jmp': index += pos; break;
      case 'nop': index += 1; break;
    }
  }
  return {val: acc, isCompleted: index === cmds.length};
};

const part1 = () => {
  let map = input.map(([cmd, pos]) => ({cmd, pos: +pos, executed: false}));
  return runBootup(map).val;
};

const part2 = () => {
  for (const op in input) {
    let newInput = [...input].map(([cmd, pos]) => ({cmd, pos: +pos, executed: false}));
    let {cmd,} = newInput[op];
    switch (cmd) {
      case "nop": newInput[op].cmd = "jmp"; break;
      case "jmp": newInput[op].cmd = "nop"; break;
    }

    let result = runBootup(newInput);
    if (result.isCompleted) return result.val;
  }
};

console.log('-> part1', part1());
console.log('-> part2', part2());
