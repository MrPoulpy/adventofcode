var fs = require('fs');
var combi = require('js-combinatorics');
var _ = require('lodash');
var input = fs.readFileSync('input.txt').toString().split('\n');

var happiness = [];
var total = [];

input.forEach(function(v){
    var regex = v.match(/(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)\./);
    listPeople(regex[1], regex[2], regex[3], regex[4]);

    // Added for part2
    listPeople(regex[1], regex[2], "0", "Denis");
    listPeople("Denis", regex[2], "0", regex[1]);
});

var orga = combi.permutation(Object.keys(happiness)).toArray();

orga.forEach(function(v){
    var happy = 0;
    for(var i=0; i<v.length; i++) {
        if (i == 0) {
            happy += +happiness[v[i]][v[v.length-1]];
            happy += +happiness[v[i]][v[i + 1]];
        } else if (i === v.length-1) {
            happy += +happiness[v[i]][v[i - 1]];
            happy += +happiness[v[i]][v[0]];
        } else {
            happy += +happiness[v[i]][v[i - 1]];
            happy += +happiness[v[i]][v[i + 1]];
        }
    }
    total.push(happy);
});

console.log('Max amount of happiness : ' + _.max(total));

function listPeople(people, gain, amount, mate) {
    if(happiness[people] === undefined) {
        var tab = [];
        tab[mate] = gain == "gain" ? amount : -amount;
        happiness[people] = tab;
    } else {
        happiness[people][mate] = gain == "gain" ? amount : -amount;
    }
}