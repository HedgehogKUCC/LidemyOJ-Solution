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
  const TEMP = lines[0].split(' ');
  const FIRST = Number(TEMP[0]);
  const MATH_NOTATION = TEMP[1];
  const SECOND = Number(TEMP[2]);

  switch (MATH_NOTATION) {
    case '+':
      log(FIRST + SECOND);
      break;
    case '-':
      log(FIRST - SECOND);
      break;
    case '*':
      log(FIRST * SECOND);
      break;
    case '/':
      log(FIRST / SECOND);
      break;
    default:
      log(`Switch Default`);
      break;
  }
}
