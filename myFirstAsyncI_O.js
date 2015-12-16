var fs = require("fs");

function countLines(file) {
  var lines = "";
  var contents = fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      lines += data;
      console.log(lines.split("\n").length - 1);
    }
  }); 
}


countLines(process.argv[2]);