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
  const couldTake = Number(lines[0]);
  const itemTotal = Number(lines[1]);
  const items = [];
  const thiefTook = [];
  let answer = 0;

  if (couldTake === 0) {
    console.log(answer);
    return;
  }

  for (let i = 2; i <= itemTotal + 1; i++) {
    items.push(Number(lines[i]));
  }

  if (couldTake > itemTotal) {
    items.forEach((item) => {
      answer += item;
    })

    console.log(answer);
    return;
  }

  const tempItems = JSON.parse(JSON.stringify(items));
  for (let j = 0; j < couldTake; j++) {
    const maxValue = Math.max(...tempItems);
    thiefTook.push(maxValue);
    const index = tempItems.indexOf(maxValue);
    tempItems.splice(index, 1);
  }
  
  thiefTook.forEach((item) => {
    answer += item;
  })

  console.log(answer);
}
