var program = require('commander');
var pjson = require('./package.json');
var HashMap = require('hashmap');

program
.version(pjson.version)
.usage('[options]')
.option('-i, --input <s>', 'Roman number')
.parse(process.argv);

var map = new HashMap();
map.set("I", 1);
map.set("II", 2);
map.set("III", 3);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);

var input = program.input;

console.log("input: "+input)

var inputChars = input.split("");

var arabic = 0;
var i = 0;

while(i<inputChars.length) {
	var char = inputChars[i]
	if(i+1 < inputChars.length) {
		var nextChar = inputChars[i+1]
		if(map.get(nextChar) > map.get(char)){
			arabic += map.get(nextChar) - map.get(char)
			i = i + 2;
		} else {
			arabic += map.get(char)
			i++;
		}
	} else {
		arabic += map.get(char);
		i++;
	}
}

console.log("output: "+arabic)
