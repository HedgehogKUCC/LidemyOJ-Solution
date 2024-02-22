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
  const TARGET = Number(lines[0]);
  const NUMBER_COUNT = Number(lines[1]);
  const NUMBERS = [];

  for (let i = 2; i <= NUMBER_COUNT + 1; i++) {
    NUMBERS.push(Number(lines[i]));
  }

  NUMBERS.map(() => TARGET).forEach((n) => log(n));
}
