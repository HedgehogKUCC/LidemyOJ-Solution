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
  const lineRows = lines.length;
  const regexNonDigit = /\D/g;
  const regexLowerCaseLetter = /[^a-z]/g;
  let concatString = "";
  let answer = "";

  for (let i = 0; i < lineRows; i++) {
    if (i === 0) {
      if (regexNonDigit.test(lines[i])) {
        console.log(`第 ${ i + 1 } 行字串需為數字`);
        return;
      }

      if (Number(lines[i]) < 1 || Number(lines[i]) > 100) {
        console.log(`第 ${ i + 1 } 行數字範圍限制在 1 ~ 100`);
        return;
      }

      for (let j = 1; j <= Number(lines[i]); j++) {
        if (lines[j].length > 100) {
          console.log(`第 ${ j + 1 } 行字串長度不能超過 100`);
          return;
        }
  
        if (regexLowerCaseLetter.test(lines[j])) {
          console.log(`第 ${ j + 1 } 行字串只能是小寫英文字母`);
          return;
        }

        concatString += lines[j];
      }
    }

    if ( i === Number(lines[0]) + 1 ) {
      if (regexNonDigit.test(lines[i])) {
        console.log(`第 ${ i + 1 } 行字串需為數字`);
        return;
      }

      const numberRows = Number(lines[i]);
      const concatStringLength = concatString.length;

      for (let k = i + 1; k <= i + numberRows; k++) {
        if (regexNonDigit.test(lines[k])) {
          console.log(`第 ${ k + 1 } 行字串需為數字`);
          return;
        }

        if ( lines[k] < 1 || lines[k] > concatStringLength ) {
          console.log(`第 ${ k + 1 } 行數字超出 1 ~ ${concatStringLength} 範圍`);
          return;
        }

        answer += concatString[Number(lines[k] - 1)];
      }
    }
  }

  console.log(answer);
}
