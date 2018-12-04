var fs = require('fs');
var input = Array.from(fs.readFileSync('input.txt').toString());

var floor = 0;
var basement;

input.forEach(function(value, index) {
	if (value === '(')
		floor++;
	else if (value == ')')
		floor--;
	if (floor == -1 && basement == null)
		basement = index + 1;
});

console.log('Santa goes to floor:' + floor);
console.log('Santa hit basement pos:' + basement);
