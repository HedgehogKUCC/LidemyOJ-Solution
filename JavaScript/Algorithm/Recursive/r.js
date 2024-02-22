/**
 * What is Recursion? A Recursive Function Explained with JavaScript Code Examples
 * https://www.freecodecamp.org/news/what-is-recursion-in-javascript/
 */

const log = console.log;

/**
 * Sum(n) = n + (n-1) + (n-2) ... + 1
 */
// log(RSum(3));
// log(Sum(5));

function RSum(n) {
  // log(`n: ${n}`)
  if (n === 1) {
    // log(`n === 1: ${n}`)
    return n;
  } else {
    // log(`RSum(${n-1}) + ${n}`)
    return RSum(n-1) + n;
  }
}

function Sum(n) {
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    // log(`sum = ${sum} + ${i}`);
    sum += i;
  }

  return sum;
}

/**
 * Fibonacci
 * F0 = 0, F1 = 1, F(n) = F(n-1) + F(n-2) P.S. n >= 2
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
 */
// log(RFibonacci(10))
// log(Fibonacci(4))

function RFibonacci(n) {
  if (n < 2) {
    // log(`if: ${n}`)
    return n;
  }
  // log(`RFibonacci(${n - 1}) + RFibonacci(${n - 2})`)
  return RFibonacci(n - 1) + RFibonacci(n - 2);
}

function Fibonacci(n) {
  const basic = [0, 1];

  if (n < 2) {
    // log(basic)
    return basic[n];
  }

  for (let i = 2; i <= n; i++) {
    basic[i] = basic[i-1] + basic[i-2];
  }
  // log(basic);
  return basic[n];
}

/**
 * 階乘 https://zh.wikipedia.org/zh-tw/%E9%9A%8E%E4%B9%98
 * 5! = 5 * 4 * 3 * 2 * 1, Ans: 120
 */
// log(RFactorial(5))
// log(Factorial(5))

function RFactorial(n) {
  if (n === 1) {
    // log(`${n}`)
    return n;
  } else {
    // log(`${n} * RFactorial(${n-1})`)
    return n * RFactorial(n-1);
  }
}

function Factorial(n) {
  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    // log(`factorial = ${factorial} * ${i}`);
    factorial *= i;
  }

  return factorial;
}
