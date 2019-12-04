const fs = require('fs');
const [wire1, wire2] = fs.readFileSync('input.txt').toString().trim().split('\n')
    .map(l => l.split(',').map(v => v.trim()).map(p => ({ dir: p[0], steps: Number(p.substring(1)) })));

const move = {'X': {'U': 0, 'D': 0, 'L': -1, 'R': 1}, 'Y': {'U': 1, 'D': -1, 'L': 0, 'R': 0}};

const mapWire = (wire) => {
    let map = {};
    let len = 0;
    let x = 0;
    let y = 0;

    wire.forEach(path => {
       for (let i = 0 ; i < path.steps ; i++) {
           len += 1;
           x += move['X'][path.dir];
           y += move['Y'][path.dir];
           map[`${x}.${y}`] = len;
       }
    });
    return map;
};

let path1 = mapWire(wire1);
let path2 = mapWire(wire2);
let intersect = Object.keys(path1).filter(i => path2[i]);

const part1 = Math.min.apply(null, intersect.map(i => i.split('.').map(n => Math.abs(+n)).reduce((a, b) => a + b)));
console.log(part1);

const part2 = Math.min.apply(null, intersect.map(i => path1[i] + path2[i]));
console.log(part2);
