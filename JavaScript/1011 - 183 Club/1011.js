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
  const limitMin = 1n;
  const limitMax = 20n;
  const limitHeightMin = 100n;
  const limitHeightMax = 200n;
  const limitAverageHeightMin = 183;

  const regexNonDigit = /\D/g;

  const heightCount = lines[0];
  let heights = lines[1];

  let heightSum = 0;
  let result = 0;

  if (regexNonDigit.test(heightCount)) {
    console.log(`第一行數字請輸入自然數`);
    return;
  }

  /*
    https://github.com/Lidemy/forum/discussions/301
    測資的 M 有大於 20
  */
  // if (BigInt(heightCount) < limitMin || BigInt(heightCount) > limitMax) {
    // console.log(`第一行數字超過限制範圍 ${limitMin} ~ ${limitMax}`);
    // return;
  // }

  if (typeof heights === 'undefined' || !heights.trim()) {
    console.log(`第二行請輸入數字`);
    return;
  }

  heights = heights.trim().split(' ');

  if (Number(heightCount) !== heights.length) {
    console.log(`第一行輸入的數字: ${Number(heightCount)}`);
    console.log(`第二行有 ${heights.length} 個數字`);
    console.log(`第一行數字和第二行數字數量不符合`);
    return;
  }

  for (let i = 0; i < Number(heightCount); i++) {
    if (regexNonDigit.test(heights[i])) {
      console.log(`第二行第 ${i+1} 個數字請輸入自然數`);
      return;
    }

    if (BigInt(heights[i]) < limitHeightMin || BigInt(heights[i]) > limitHeightMax) {
      console.log(`第二行第 ${i+1} 個數字超過限制範圍 ${limitHeightMin} ~ ${limitHeightMax}`);
      return;
    }

    heightSum += Number(heights[i]);
  }

  // console.log(`Sum: ${heightSum}`);
  // console.log(`Count: ${Number(heightCount)}`);

  result = heightSum / Number(heightCount);
  // console.log(`Division: ${result}、Length: ${result.toString().length}`);
  // console.log(`LimitAverageHeightMin: ${limitAverageHeightMin}`);
  // console.log(`Result: ${result >= limitAverageHeightMin}`);

  result >= limitAverageHeightMin ? console.log(`real`) : console.log(`fake`);
}
