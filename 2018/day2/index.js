const fs = require('fs');
const data = fs.readFileSync('input.txt').toString().split('\n');

let twos =0,
    threes = 0;

for (const tag of data) {
    let tabChars = [];
    for (const char of tag) {
        if (tabChars.every(c => !c.includes(char))) {
            tabChars.push([char]);
        } else {
            tabChars.find(c => c.includes(char)).push(char);
        }
    }
    if (tabChars.filter(char => char.length === 2).length) {
        twos++;
    }
    if (tabChars.filter(char => char.length === 3).length) {
        threes++;
    }
}

console.log("Checksum:", twos * threes); //7688