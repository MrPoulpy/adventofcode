const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let answer = input.map(val => +val).reduce((a, b) => a + b, 0);

console.log(answer);