module.exports = function run(day, year, part = null) {
  let answer = require(`./${year}/day${day}`);
  if (part === "1" || part === null) {
    console.log(`part1:`);
    console.log(JSON.stringify(answer.part1, null, 2));
  }
  if (part === "2" || part === null) {
    console.log(`part2:`);
    console.log(JSON.stringify(answer.part2, null, 2));
  }
}
