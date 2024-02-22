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

function solve(lines) {
  const rows = lines.length;

  const rowLimitMin = 1;
  const rowLimitMax = 100;

  const columnLimitMin = 2;
  const columnLimitMax = 100000;

  const regexNonDigit = /\D/g;
  
  if ( rows < rowLimitMin || rows > rowLimitMax ) {
    console.log(`超過行數限制範圍 ${rowLimitMin} ~ ${rowLimitMax}`);
    return;
  }
  
  for (let i = 0; i < rows; i++) {
    const factor = [];
    const sumFactor = [];

    if (regexNonDigit.test(lines[i])) {
      console.log(`請輸入自然數`);
      return;
    }

    if (Number(lines[i]) === 0) {
      return;
    }

    if (Number(lines[i]) < columnLimitMin || Number(lines[i]) > columnLimitMax) {
      console.log(`超過限制範圍 ${columnLimitMin} ~ ${columnLimitMax}`);
      return;
    }

    for (let j = 1; j < Number(lines[i]); j++) {
      if (Number(lines[i]) % j === 0) {
        factor.push(j);
      }
    }

    let amicableNumber = 0;
    const factorLength = factor.length;
    for (let k = 0; k < factorLength; k++) {
      amicableNumber += factor[k];
    }

    if (amicableNumber > 1) {
      for (let m = 1; m < amicableNumber; m++) {
        if (amicableNumber % m === 0) {
          sumFactor.push(m);
        }
      }

      let sum = 0;
      const sumFactorLength = sumFactor.length;
      for (let n = 0; n < sumFactorLength; n++) {
        sum += sumFactor[n];
      }

      if ( sum === Number(lines[i]) ) {
        console.log(amicableNumber);
      } else {
        console.log(`QQ`);
      }
    } else {
      console.log(`QQ`);
    }
  }
}
