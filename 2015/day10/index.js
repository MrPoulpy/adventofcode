var input = '1113222113';
var loop = 50;
var regex = /(.)\1*/g;

for(var i=0; i<loop; i++) {
    input = repeat(input);
}

function repeat(n) {
    function set(n) {
        return n.length.toString() + n.substring(0, 1);
    }
    return n.replace(regex, set);
}

console.log('After '+ loop +' occurences, string length is : '+ input.length);