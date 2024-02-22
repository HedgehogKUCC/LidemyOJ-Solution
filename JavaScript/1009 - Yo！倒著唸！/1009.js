var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  const limitLengthMin = 1;
  const limitLengthMax = 100;

  if (lines[0].length < limitLengthMin || lines[0].length > limitLengthMax) {
    console.log(`字串長度超出限制範圍 ${limitLengthMin} ~ ${limitLengthMax}`);
    return;
  }

  console.log(lines[0].split("").reverse().join(""));
}
