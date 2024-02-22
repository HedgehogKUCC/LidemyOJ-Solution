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
  const WORD = lines[0];
  const WORD_LENGTH = WORD.length;
  const EXPECTED_LENGTH = Number(lines[1]);
  const APPEND_WORD = lines[2];
  const APPEND_WORD_LENGTH = APPEND_WORD.length;

  if (WORD_LENGTH >= EXPECTED_LENGTH) {
    log(WORD);
    return;
  }

  let i = 0;
  let answer = WORD;

  do {
    answer += APPEND_WORD[i];
    i++;

    if (i === APPEND_WORD_LENGTH) {
      i = 0;
    }
  } while (answer.length < EXPECTED_LENGTH);

  log(answer);
}
