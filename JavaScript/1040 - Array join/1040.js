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
  const TARGET = lines[0];
  const NUMBER_COUNT = Number(lines[1]);
  const NUMBERS = [];
  let answer = "";

  for (let i = 2; i <= NUMBER_COUNT + 1; i++) {
    NUMBERS.push(lines[i]);
  }

  for (let j = 0; j < NUMBER_COUNT; j++) {
    j !== NUMBER_COUNT - 1 ? answer += NUMBERS[j] + TARGET : answer += NUMBERS[j];
  }

  log(answer);
}
