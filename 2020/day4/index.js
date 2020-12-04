const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n\n').map(v => v.replace(/\n/g, " ").split(" ").map(i => i.split(":")));

const part1 = () => {
  const req_fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const fields = input.map(l => l.map(f => f[0]));
  return fields.map(f => req_fields.every(v => f.includes(v))).filter(a => a).length;
};

const part2 = () => {
  let count = 0;
  const req_fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const byr_match = /\d{4}/;
  const iyr_match = /\d{4}/;
  const eyr_match = /\d{4}/;
  const hgt_match = /\d+in|cm/;
  const hcl_match = /#[0-9a-f]{6}/;
  const ecl_match = /amb|blu|brn|gry|grn|hzl|oth/;
  const pid_match = /\b\d{9}\b/;

  for (const line of input) {
    if (req_fields.every(v => line.map(l => l[0]).includes(v))) {
      let isValid = true;
      const obj = Object.fromEntries(line);

      //byr test
      if (!(RegExp(byr_match).test(obj.byr) && parseInt(obj.byr) >= 1920 && parseInt(obj.byr) <= 2002)) {
        isValid = false;
      }
      //iyr test
      if (!(RegExp(iyr_match).test(obj.iyr) && parseInt(obj.iyr) >= 2010 && parseInt(obj.iyr) <= 2020)) {
        isValid = false;
      }
      //eyr test
      if (!(RegExp(eyr_match).test(obj.eyr) && parseInt(obj.eyr) >= 2020 && parseInt(obj.eyr) <= 2030)) {
        isValid = false;
      }
      //hgt test
      if (RegExp(hgt_match).test(obj.hgt)) {
        let size = parseInt(obj.hgt.substr(0, obj.hgt.length - 2));
        if (!((obj.hgt.slice(-2) === "cm" && size >= 150 && size <= 193) || (obj.hgt.slice(-2) === "in" && size >= 59 && size <= 76))) {
          isValid = false;
        }
      } else {
        isValid = false;
      }
      //hcl test
      if (!(RegExp(hcl_match).test(obj.hcl))) {
        isValid = false;
      }
      //ecl test
      if (!(RegExp(ecl_match).test(obj.ecl))) {
        isValid = false;
      }
      //pid test
      if (!(RegExp(pid_match).test(obj.pid))) {
        isValid = false;
      }

      if (isValid) count++;
    }
  }

  return count;
};

console.log('-> part1', part1());
console.log('-> part2', part2());
