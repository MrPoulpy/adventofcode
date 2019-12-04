const [minRange, maxRange] = "153517-630395".split('-').map(n => +n);
let part1 = 0;
let part2 = 0;

for (let i = minRange; i <= maxRange; i++) {
    const numArray = [...i.toString()];
    if (numArray.sort().join('') === i.toString() && new Set(numArray).size !== numArray.length) {
        part1++;
        if (numArray.map(v => numArray.filter(d => d === v).length).filter(v => v === 2).length) {
            part2++;
        }
    }
}

console.log(part1);
console.log(part2);


