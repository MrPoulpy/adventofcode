require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');

const year = process.argv[3] ?? "2023";
const day = process.argv[2];

let dir = `./${year}`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
dir = `./${year}/day${day}`
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    headers: {
      cookie: `session=${process.env.SESSION_COOKIE}`,
    },
  })
  .then(res => res.text())
  .then(body => fs.writeFileSync(`${dir}/input.txt`, body.replace(/\n$/, "")));

  //code
  let func = `const fs = require('fs');
const input = fs.readFileSync('${year}/day${day}/input.txt').toString().trim().split('\\n');

const part1 = () => {
  return 0;
}

const part2 = () => {
  return 0;
}

module.exports = {part1: part1(), part2: part2()};
`;
  fs.writeFileSync(`${dir}/index.js`, func);
}
