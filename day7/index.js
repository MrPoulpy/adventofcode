var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
	
input = input.map(function(a) {
	return a.split(' ');
});

input.sort(function(a,b) {
	a = a[a.length - 1];
	b = b[b.length - 1];
	
	if(a === 'a') {
		return 1;
	} else if(b === 'a') {
		return -1;
	}

	if(a.length === b.length) {
		return a > b ? 1 : -1;
	}
	
	return a.length - b.length;
});

var Solve = function(wires) {
	var calcVal = function(v) {
		if(v in wires) {
			return wires[v];
		}
		return +v;
	};
	
	var setVal = function(wire, v) {
		if(wire in wires) {
			return;
		}
		wires[wire] = v & 0xFFFF;
	};
	
	for( var i = 0; i < input.length; i++ ) {
		var op = input[i];
		switch(op.length) {
			case 3:
				setVal(op[2], calcVal(op[0]));
				break;
			
			case 4:
				setVal(op[3], ~calcVal(op[1]));
				break;
			
			case 5:
				switch(op[1]) {
					case 'AND':
						setVal(op[4], calcVal(op[0]) & calcVal(op[2]));
						break;
					case 'OR':
						setVal(op[4], calcVal(op[0]) | calcVal(op[2]));
						break;
					case 'LSHIFT':
						setVal(op[4], calcVal(op[0]) << calcVal(op[2]));
						break;
					case 'RSHIFT':
						setVal(op[4], calcVal(op[0]) >> calcVal(op[2]));
						break;
				}
				break;
		}
	}
	return wires['a'];
};

console.log('Value of wire a is: ' + Solve({}));
console.log('Value of wire b after override is: ' + Solve({b: Solve({})}));