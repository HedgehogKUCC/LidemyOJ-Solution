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
  const layer = Number(lines[0]);

  if (layer === 1) {
    log(`*`);
    return;
  }
  
  for (let i = 1; i <= layer; i++) {
    let symbol = "";

    for (let m = layer; m > i; m--) {
      let leftSpace = '';
      leftSpace += " ";
      symbol += leftSpace;
    }

    for (let j = 1; j <= i; j++) {
      symbol += "*";
    }

    for (let k = 1; k <= i - 1; k++) {
      symbol += "*";
    }

    log(symbol);
  }
}
