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
  const TARGET = lines[1];
  const REGEX_TARGET = new RegExp(`${TARGET}$`, 'g');
  log(REGEX_TARGET.test(WORD));
}
