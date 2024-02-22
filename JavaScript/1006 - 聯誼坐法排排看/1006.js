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
  const regexNonDigit = /\D/g;
  let totalSeat = 0;
  const seatMethods = [];
  let answer = 0;
  
  for (let i = 0; i < rows; i++) {
    if (regexNonDigit.test(lines[i])) {
      console.log(`請輸入自然數`);
      return;
    }

    if (i === 0) {
      if (Number(lines[i]) < 2 || Number(lines[i] > 30 )) {
        console.log(`超過限制範圍 2 ~ 30`);
        return;
      }

      if (lines[i] % 2 !== 0) {
        console.log(`第一行數字請輸入偶數`);
        return;
      }

      totalSeat = Number(lines[i]);

      let count = 0;
      let tempAry = [];
      let tempNumber = 0;
      for (let k = 1; k <= totalSeat; k++) {
        count++;
        if (count === 2) {
          tempAry.push(tempNumber, k);
          seatMethods.push(tempAry);
          count = 0;
          tempAry = [];
        } else {
          tempNumber = k;
        }
      }

      const seatMethodsLength = seatMethods.length;
      for (let m = 0; m < seatMethodsLength; m++) {
        const tempOddAry = [];
        const tempEvenAry = [];
        const tempM = m + 1;

        if (tempM < seatMethodsLength) {
          tempOddAry.push(seatMethods[m][0], seatMethods[tempM][0]);
          tempEvenAry.push(seatMethods[m][1], seatMethods[tempM][1]);
          seatMethods.push(tempOddAry, tempEvenAry);
        }
      }
      // console.log(seatMethods);
    }

    if (i === 1) {
      if (Number(lines[i]) < 0 || Number(lines[i]) > totalSeat) {
        console.log(`超過限制範圍 0 ~ ${totalSeat}`);
        return;
      }

      let checkNumbers = [];
      let checkNumbersLength = Number(lines[i]);

      for (let j = i + 1; j < rows; j++) {
        checkNumbers.push(Number(lines[j]));
      }

      for (let jj = 0; jj < seatMethods.length; jj++) {
        let tempSeatMethod = seatMethods[jj];
        let count = 0;
        
        for (let jjj = 0; jjj < checkNumbersLength; jjj++) {
          if (tempSeatMethod[0] === checkNumbers[jjj] || tempSeatMethod[1] === checkNumbers[jjj]) {
            count++;
          }
        }

        if (!count) {
          answer++;
        }
      }
    }
  }

  console.log(answer);
}
