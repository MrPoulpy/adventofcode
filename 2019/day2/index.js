const fs = require('fs');
const inputMapped = fs.readFileSync('input.txt').toString().trim().split(',').map(n => +n);
const resetInputMapped = [...inputMapped];

inputMapped[1] = 12;
inputMapped[2] = 2;

const parse = (input) => {
    let position = 0;

    while (input[position] !== 99) {
        const opcode = input[position];
        const input1 = input[input[position + 1]];
        const input2 = input[input[position + 2]];
        const output = input[position + 3];
        if (opcode === 1) {
            input[output] = input1 + input2;
        } else if (opcode === 2) {
            input[output] = input1 * input2;
        }
        position += 4;
    }
    return input[0];
};

const part1 = parse(inputMapped);
console.log(part1);

const output = 19690720;
let part2 = null;

for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {

        let data = [...resetInputMapped];

        data[1] = noun;
        data[2] = verb;

        if (parse(data) === output) {
            part2 = 100 * noun + verb;
        }
    }
}

console.log(part2);
