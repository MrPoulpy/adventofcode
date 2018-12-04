var input = 'hxbxwxba';

function calculate(pass) {
	while(!(pass.match(/(.)\1.*(.)\2/) && !pass.match(/[iol]/) && pass.match(/abc|bcd|cde|efg|fgh|pqr|qrs|rst|stu|uvw|vwx|wxy|xyz/))) {
		pass = (parseInt(pass, 36) + 1).toString(36);
	}
	return pass;
}

console.log('New password is : ' + calculate(input));
console.log('New password 2 is : ' + calculate((parseInt(calculate(input),36) + 1).toString(36)));