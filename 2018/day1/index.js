const fs = require('fs');
const inputMapped = fs.readFileSync('input.txt').toString().split('\n').map(val => +val);

let answer = inputMapped.reduce((a, b) => a + b, 0);

console.log(answer); //433

const frequencies = new Set();
let frequency = 0;
let cnt = 0;

while (!frequencies.has(frequency)) {
    frequencies.add(frequency);

    if (cnt === inputMapped.length) {
        cnt = 0;
    }
    frequency += inputMapped[cnt];
    cnt++;
}

console.log(frequency); //256