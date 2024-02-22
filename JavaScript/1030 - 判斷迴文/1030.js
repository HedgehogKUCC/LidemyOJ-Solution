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
  const ORIGIN = lines[0];
  const REVERSE = ORIGIN.split('').reverse().join('');

  ORIGIN === REVERSE ? log(`True`) : log(`False`);
}
