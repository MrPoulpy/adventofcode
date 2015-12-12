var fs = require('fs');
var _ = require('lodash');
var combi = require('js-combinatorics');
var input = fs.readFileSync('input.txt').toString().split('\n');

var cities = [];
var distances = [];

input.forEach(function(v){
	var regex = v.match(/(\w*) to (\w*) = (\d*)/);
	listCities(regex[1],regex[2],regex[3]);
});

var paths = combi.permutation(Object.keys(cities)).toArray();

paths.forEach(function(v){
	var dist = 0;

	for(var i=0; i<v.length-1; i++) {
		dist += +cities[v[i]][v[i+1]];
	}

	distances.push(dist);
});

console.log('Shortest route : ' + _.min(distances));
console.log('Longest route : ' + _.max(distances));

function listCities(city, dest, dist) {
	if(cities[city] === undefined) {
		var tab = [];
		tab[dest] = dist;
		cities[city] = tab;
	} else {
		cities[city][dest] = dist;
	}

	if(cities[dest] === undefined) {
		var tab = [];
		tab[city] = dist;
		cities[dest] = tab;
	} else {
		cities[dest][city] = dist;
	}
}