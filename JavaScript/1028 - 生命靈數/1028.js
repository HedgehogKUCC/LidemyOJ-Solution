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

/**
 * 生命靈數 - 分析
 * https://www.vogue.com.tw/lifestyle/article/%E7%94%9F%E5%91%BD%E9%9D%88%E6%95%B8-%E5%88%86%E6%9E%90
 */

const log = console.log;

function solve(lines) {
  const BIRTHDAY = lines[0].split(' ').join('').split('');
  const BIRTHDAY_LENGTH = BIRTHDAY.length;

  let sum = 0;
  let answer = 0;

  for (let i = 0; i < BIRTHDAY_LENGTH; i++) {
    sum += Number(BIRTHDAY[i]);
  }

  answer = sum;

  if (answer.toString().length === 1) {
    log(answer);
    return;
  }

  while (answer.toString().length > 1) {
    let tempNumbers = answer.toString().split('').map(Number);
    let tempNumbersLength = tempNumbers.length;

    sum = 0;

    for (let j = 0; j < tempNumbersLength; j++) {
      sum += tempNumbers[j];
    }

    answer = sum;
  }

  log(answer);
}
