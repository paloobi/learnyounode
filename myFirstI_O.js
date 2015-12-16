var fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2]).toString();

var lines = fileContents.split("\n");

console.log(lines.length - 1);