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
  const valueMax = Math.max(Number(lines[0]), Number(lines[1])) * 2;
  const lostValue = valueMax - (Number(lines[0]) + Number(lines[1]));

  console.log(valueMax);
  console.log(lostValue);
}
