var fs = require('fs');
var input = JSON.parse(fs.readFileSync('input.txt').toString());

var total = 0;
var total2 = 0;

function sumNumbers(input, part2) {
	if(part2){
		for (var key in input) {
			if (!Array.isArray(input) && input[key] === "red") 
			return;
		}
	}
	for (key in input) {
		if (typeof input[key] === "number") 
			part2 ? total2 += input[key] : total += input[key];
		else if (typeof input[key] == "object")
			sumNumbers(input[key], part2);
	}
	return;
}

sumNumbers(input, false);
sumNumbers(input, true);

console.log("Total numbers: " + total);
console.log("Considering red : " + total2);