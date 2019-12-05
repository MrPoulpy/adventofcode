const fs = require('fs');
const inputMapped = fs.readFileSync('input.txt').toString().trim().split(',').map(n => +n);

const convert = (arr, mode = '0', pos) => {
   return mode === '0' ? arr[pos] : pos;
};

const parse = raw => {
    const opcode = raw.toString().slice(-2);
    const mode = raw.toString().slice(0, -2).split('');
    return [mode, +opcode];
};

const calcDiagnostic = (instructions, input) => {
    for (let i = 0; i < instructions.length;) {
        const [rawOpcode, val1, val2, out] = instructions.slice(i, i + 4);
        const [modes, opcode] = parse(rawOpcode);

        switch (opcode) {
            case 1:
                instructions[out] = convert(instructions, modes.pop(), val1) + convert(instructions, modes.pop(), val2); i += 4; break;
            case 2:
                instructions[out] = convert(instructions, modes.pop(), val1) * convert(instructions, modes.pop(), val2); i += 4; break;
            case 3:
                instructions[val1] = input; i += 2; break;
            case 4:
                console.log(instructions[val1]); i += 2; break;
            case 5:
                i = convert(instructions, modes.pop(), val1) !== 0 ? convert(instructions, modes.pop(), val2) : i + 3; break;
            case 6:
                i = convert(instructions, modes.pop(), val1) === 0 ? convert(instructions, modes.pop(), val2) : i + 3; break;
            case 7:
                instructions[out] = convert(instructions, modes.pop(), val1) < convert(instructions, modes.pop(), val2) ? 1 : 0; i += 4; break;
            case 8:
                instructions[out] = convert(instructions, modes.pop(), val1) === convert(instructions, modes.pop(), val2) ? 1 : 0; i += 4; break;
            case 99:
                return;
        }
    }
};

calcDiagnostic([...inputMapped], 1);
calcDiagnostic([...inputMapped], 5);
