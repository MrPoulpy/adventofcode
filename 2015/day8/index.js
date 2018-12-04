var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
var result = 0;
var add = 0;

input.forEach(function(v){
	result += v.length - eval(v).length;
	add += JSON.stringify(v).length - v.length;
})

console.log('Number of characters minus characters in memory: ' + result);
console.log('Total for part 2 : ' + add);