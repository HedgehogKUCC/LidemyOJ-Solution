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
  const TOTAL = Number(lines[0]);
  const NUMBERS = lines[1].split(' ').map(Number);
  const COMMON_RATIO = NUMBERS[1] / NUMBERS[0];
  let answer = false;

  // log(NUMBERS)
  // log(COMMON_RATIO)

  for (let i = 0; i < TOTAL; i++) {
    if (i === 0) { continue; }

    if ( COMMON_RATIO !== NUMBERS[i] / NUMBERS[i-1] ) {
      answer = false;
      break;
    }
    answer = true;
  }

  answer ? log(`Yes`) : log(`No`);
}
