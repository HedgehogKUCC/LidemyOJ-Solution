
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
  // 費波那契數 https://zh.wikipedia.org/zh-tw/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0
  // Fn = F(n-1) + F(n-2);
  const arr = [0, 1, 1, 2];
  for (let i = 4; i <= 20; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  console.log(arr[Number(lines[0])]);
}
