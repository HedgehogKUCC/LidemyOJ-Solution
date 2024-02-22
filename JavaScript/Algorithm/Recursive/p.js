/**
 * What is Recursion? A Recursive Function Explained with JavaScript Code Examples
 * https://www.freecodecamp.org/news/what-is-recursion-in-javascript/
 */

const log = console.log;

/**
 * 5! = 5 * 4 * 3 * 2 * 1
 */

function factorial(n) {
  if (n === 1) {
    log(`n === 1: ${n}`)
    return n;
  }
  log(`${n} * factorial(${n-1})`)
  return n * factorial(n-1)
}

// log(factorial(4))

/**
 * F0: 0, F1: 1, Fn = F(n-1) + F(n-2), n > 2
 */

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

log(fibonacci(7))
