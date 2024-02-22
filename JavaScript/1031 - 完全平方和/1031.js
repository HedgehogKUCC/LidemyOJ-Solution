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

const log = console.log;

function solve(lines) {
  const LIMIT_MAX = Number(lines[0]);
  let start = 1;
  let sum = 0;

  while (start * start < LIMIT_MAX) {
    sum += start * start;
    start++;
  }

  log(sum);
}
