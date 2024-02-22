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
  const WORD = lines[0];
  const START = Number(lines[1]);
  const END = Number(lines[2]);

  log(WORD.slice(START, END));
}
