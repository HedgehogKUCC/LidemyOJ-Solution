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

const LOWER_CASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPER_CASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solve(lines) {
  const WORD = lines[0];
  const WORD_LENGTH = WORD.length;
  let answer = "";

  for (let i = 0; i < WORD_LENGTH; i++) {
    let index = UPPER_CASE_LETTERS.indexOf(WORD[i]);

    if (index !== -1) {
      answer += LOWER_CASE_LETTERS[index];
      continue;
    }

    answer += WORD[i];
  }

  log(answer);
}
