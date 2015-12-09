var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

var count = 0;

input.forEach(function(v){
	// if (v.match(/([aeiou].*){3,}/) && v.match(/(.)\1/) && !v.match(/ab|cd|pq|xy/))
	if (v.match(/([a-z][a-z])[a-z]*\1/) && v.match(/([a-z])[a-z]\1/))
		count++;
})

console.log(count);