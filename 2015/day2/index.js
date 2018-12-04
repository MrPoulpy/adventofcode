var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
var measures = [];
var total = 0;
var ribbon = 0;

var Box = function(w,h,l) {
	this.width = w;
	this.height = h;
	this.length = l;

	this.surface = 2*l*w + 2*w*h + 2*h*l;
	this.paper = this.surface + Math.min(l*w,w*h,h*l);
	this.ribbon = (2*w + 2*h + 2*l - 2*Math.max(w,h,l)) + w*h*l;
}


for(var i=0; i<input.length; i++){
	array = input[i].toString().split('x');
	box = new Box(array[0], array[1], array[2]);
	total += box.paper;
	ribbon += box.ribbon;
}

console.log('Amount of paper needed:' + total);
console.log('Length of ribbon needed:' + ribbon);