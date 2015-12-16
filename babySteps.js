var nums = process.argv.slice(2);

var total = 0;

nums.forEach(function(num) {
  total += +num;
});

console.log(total);