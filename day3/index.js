var fs = require('fs');
var _ = require('lodash');
var input = Array.from(fs.readFileSync('input.txt').toString());
var houses = ['0,0'];

var posx = 0;
var posy = 0;
var botx = 0;
var boty = 0;

input.forEach(function(value, index){
	index % 2 == 0 ? turn = true : turn = false;
	switch(value) {
		case "^":
			// posy++;
			turn ? posy++ : boty++;
			break;
		case ">":
			// posx++;
			turn ? posx++ : botx++;
			break;
		case "v":
			// posy--;
			turn ? posy-- : boty--;
			break;
		case "<":
			// posx--;
			turn ? posx-- : botx--;
			break;
	}
	//houses.push([posx, posy].toString());
	turn ? houses.push([posx,posy].toString()) : houses.push([botx,boty].toString());
});

console.log(_.uniq(houses, false).length);