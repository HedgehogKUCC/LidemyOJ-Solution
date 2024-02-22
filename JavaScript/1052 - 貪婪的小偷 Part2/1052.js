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
  const [AMOUNT, BAG_WEIGHT] = lines[0].split(' ').map(Number);

  const WEIGHTS = [];
  const VALUES = [];

  for (let i = 1; i <= AMOUNT; i++) {
    let [weight, value] = lines[i].split(' ').map(Number);

    WEIGHTS.push(weight);
    VALUES.push(value);
  }

  knapsack(BAG_WEIGHT, WEIGHTS, VALUES, AMOUNT);
}

function knapsack(bag_weight, weights, values, amount) {
  let DP = [];

  for (let i = 0; i <= amount; i++) {
    DP[i] = [];

    for (let j = 0; j <= bag_weight; j++) {
      if (i === 0 || j === 0) {
        DP[i][j] = 0;
        continue;
      }

      if (j < weights[i - 1]) {
        DP[i][j] = DP[i - 1][j];
      }

      if (j >= weights[i - 1]) {
        DP[i][j] = Math.max(DP[i - 1][j], DP[i - 1][j - weights[i - 1]] + values[i-1]);
      }
    }
  }

  // log(DP)
  log(DP[amount][bag_weight]);
}

// function knapsack(bag_weight, weights, values, amount) {
//   let DP = [];

//   for (let i = 0; i <= amount; i++) {
//     DP[i] = [];

//     for (let j = 0; j <= bag_weight; j++) {
//       if (i === 0 || j === 0) {
//         DP[i][j] = 0;
//       } else if (j < weights[i - 1]) {
//         log(`j < weights[i - 1]: ${j} < weights[${i} - 1] => ${j < weights[i - 1]}`)
//         DP[i][j] = DP[i - 1][j];
//       } else {
//         log(`A: ${DP[i - 1][j - weights[i - 1]] + values[i - 1]}`)
//         log(`B: ${DP[i - 1][j]}`)
//         log(`DP[${i}][${j}]: ${Math.max(DP[i - 1][j - weights[i - 1]] + values[i - 1], DP[i - 1][j])}`)
//         DP[i][j] = Math.max(DP[i - 1][j - weights[i - 1]] + values[i - 1], DP[i - 1][j]);
//       }
//     }
//   }

//   log(DP);
//   return DP[amount][bag_weight];
// }

// 5 20
// 2 3
// 3 4
// 4 5
// 5 8
// 9 10