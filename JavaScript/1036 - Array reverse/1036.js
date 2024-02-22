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
  const NUMBER_COUNT = Number(lines[0]);
  const NUMBERS = [];

  for (let i = 1; i <= NUMBER_COUNT; i++) {
    NUMBERS.push(Number(lines[i]));
  }

  NUMBERS.reverse();

  NUMBERS.forEach((n) => log(n));
}
