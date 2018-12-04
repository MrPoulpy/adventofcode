var md5 = require('crypto-js/md5');

var input = 'iwrupvqb';
var hash = '';
var current = 0;

// while (!hash.startsWith('00000')) {
while (!hash.startsWith('000000')) {
	current++;
	hash = md5(input+current).toString();
}

console.log('Lowest code is:' + current);