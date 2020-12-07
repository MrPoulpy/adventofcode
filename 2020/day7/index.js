const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const recursiveSearch = (array, search, res= []) => {
  array.forEach(l => {
    const [color, content] = l.split('contain');
    const [tryColor,] = color.split(' bags');
    if (content.includes(search)) {
      res = recursiveSearch(array, tryColor, [...new Set([...res, tryColor])]);
    }
  });
  return res;
};

const part1 = () => {
  return recursiveSearch(input, 'shiny gold').length;
};

const recursiveReverseSearch = (array, search, count = 0) => {
  array.forEach(l => {
    const [color, content] = l.split('contain');
    const [tryColor,] = color.split(' bags');
    if (search === tryColor && !content.includes("no other")) {
      content.split(',').forEach(bag => {
        const nb = parseInt(bag); // will return only the numeric part
        const bagColor = bag.substring(bag.indexOf(nb) + 2, bag.indexOf(" bag"));
        count += nb + (nb * recursiveReverseSearch(array, bagColor));
      });
    }
  });
  return count;
}

const part2 = () => {
  return recursiveReverseSearch(input, 'shiny gold');
};

console.log('-> part1', part1());
console.log('-> part2', part2());
