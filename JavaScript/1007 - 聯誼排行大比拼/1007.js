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
  const regexNoneUppercaseAndLowercaseLetters = /[^a-zA-Z]/g;

  const limitMin = 1;
  const firstRowLimitMax = 50;
  const limitLengthMax = 20;

  const scoreLimitMin = 0;
  const scoreLimitMax = 100;

  const popularKing = [];

  if (regexNonDigit.test(lines[0])) {
    console.log(`請輸入自然數`);
    return;
  }

  if (Number(lines[0]) < limitMin || Number(lines[0]) > firstRowLimitMax) {
    console.log(`超出限制範圍 ${limitMin} ~ ${firstRowLimitMax}`);
    return;
  }

  if (Number(lines[0]) + 1 !== rows ) {
    console.log(`行數不正確，需要 ${Number(lines[0]) + 1} 行`);
    return;
  }

  for (let i = 1; i <= Number(lines[0]); i++) {
    let tempAry = lines[i].split(" ");

    if (regexNoneUppercaseAndLowercaseLetters.test(tempAry[0])) {
      console.log(`［人名］只能由大小寫英文字母組成`);
      return;
    }

    if (tempAry[0].length < limitMin || tempAry[0].length > limitLengthMax) {
      console.log(`［人名］超出限制長度範圍 ${limitMin} ~ ${limitLengthMax}`);
      return;
    }

    if (regexNonDigit.test(Number(tempAry[1]))) {
      console.log(`請輸入自然數`);
      return;
    }

    if (Number(tempAry[1]) < scoreLimitMin || Number(tempAry[1]) > scoreLimitMax) {
      console.log(`［好感度總和］超出限制範圍 ${scoreLimitMin} ~ ${scoreLimitMax}`);
      return;
    }

    if (popularKing.length === 0) {
      popularKing.push(lines[i]);
    } else {
      if (Number(tempAry[1]) > Number(popularKing[0].split(' ')[1]) ) {
        popularKing.length = 0;
        popularKing.push(lines[i]);
        continue;
      }

      if (Number(tempAry[1]) === Number(popularKing[0].split(' ')[1]) ) {
        popularKing.push(lines[i]);
      }
    }
  }

  popularKing.forEach((item) => {
    console.log(`${item.split(' ')[0]}`);
  });
}
