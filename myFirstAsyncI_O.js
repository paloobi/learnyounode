var fs = require("fs");

function countLines(file, callback) {
  var lines = "";
  var contents = fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      lines += data;
      callback(lines.split("\n").length - 1);
    }
  }); 
}


countLines(process.argv[2], console.log);