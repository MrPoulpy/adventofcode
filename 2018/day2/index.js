const fs = require('fs');
const data = fs.readFileSync('input.txt').toString().split('\n');

let twos = 0,
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

let answer;
for (let i = 0; i < data.length; i++) {

    for (let j = i + 1; j < data.length; j++) {
        const commonChars = [...data[i]].reduce( (acc, char, x) => (char === data[j][x]) ? acc + char : acc, '');

        if (commonChars.length === data[i].length - 1) {
            answer = commonChars;
        }
    }
}

console.log("Best match:", answer);