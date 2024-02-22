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

const CREDIT_CARD_BANKS = {
  "4": "VISA",
  "5": "MASTER_CARD"
}

function solve(lines) {
  const CREDIT_CARD_NUMBERS = lines[0].split('-').join('').split('');
  const CREDIT_CARD_LENGTH = CREDIT_CARD_NUMBERS.length;
  const CREDIT_CARD_NUMBERS_REVERSE = JSON.parse(JSON.stringify(CREDIT_CARD_NUMBERS)).reverse();
  const CHECK_NUMBER = Number(CREDIT_CARD_NUMBERS_REVERSE[0]);

  let sum = 0;
  let tempCheckNumber = 0;

  for (let i = 0; i < CREDIT_CARD_LENGTH; i++) {
    if (i === 0) {
      continue;
    }

    if (i % 2 === 1) {
      let temp = Number(CREDIT_CARD_NUMBERS_REVERSE[i]) * 2;

      if (temp >= 10) {
        temp -= 9;
      }

      sum += temp;
    } else {
      sum += Number(CREDIT_CARD_NUMBERS_REVERSE[i]) * 1;
    }
  }

  tempCheckNumber = sum % 10;

  if ( tempCheckNumber !== 0 ) {
    tempCheckNumber = 10 - tempCheckNumber;
  }

  CHECK_NUMBER === tempCheckNumber ? log(CREDIT_CARD_BANKS[CREDIT_CARD_NUMBERS[0]]) : log(`INVALID`);
}
