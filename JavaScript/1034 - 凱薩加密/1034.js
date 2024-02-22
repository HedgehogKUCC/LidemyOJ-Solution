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

function solve(lines) {
  const TO_RIGHT_POSITION = Number(lines[0]);
  const WORDS = lines[1].split('');
  const WORDS_INDEX = [];
  const ANSWER = [];
  let encrypted_text = "";

  WORDS.forEach((word) => {
    WORDS_INDEX.push(LOWER_CASE_LETTERS.indexOf(word));
  })

  WORDS_INDEX.forEach((index) => {
    let newIndex = (index + TO_RIGHT_POSITION) % LOWER_CASE_LETTERS.length;
    ANSWER.push(newIndex);
  })

  ANSWER.forEach((index) => {
    encrypted_text += LOWER_CASE_LETTERS[index];
  })

  log(encrypted_text);
}
