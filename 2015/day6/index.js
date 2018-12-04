var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

var length = 1000;
var grid = [];
var count = 0;
var brightness = 0;

for (var i=0; i<length; i++) {
	grid[i] = [];
	for (var j=0; j<length; j++) {
		grid[i][j] = {
			active: false,
			brightness: 0
		}
	}
}

input.forEach(function(v){
	var regex = v.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);
	var action = regex[1];
	var start = {
		x: Math.min(regex[2],regex[4]),
		y: Math.min(regex[3],regex[5])
	};
	var end = {
		x: Math.max(regex[2],regex[4]),
		y: Math.max(regex[3],regex[5])
	};

	for(var i=start.x; i<=end.x; i++) {
		for(var j=start.y; j<=end.y; j++) {
			switch(action) {
				case "turn on":
					grid[i][j].active = true;
					grid[i][j].brightness++;
					break;
				case "turn off":
					grid[i][j].active = false;
					grid[i][j].brightness > 0 ? grid[i][j].brightness-- : grid[i][j].brightness = 0;
					break;
				case "toggle":
					grid[i][j].active = !grid[i][j].active;
					grid[i][j].brightness += 2;
					break;
			}
		}
	}
})

for (var i=0; i<length; i++) {
	for (var j=0; j<length; j++) {
		count += grid[i][j].active ? 1 : 0;
		brightness += grid[i][j].brightness;
	}
}

console.log('Number of lights up: ' + count);
console.log('Total brightness: ' + brightness);