// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?
var bigInt = require("big-integer");

export function problem_016(): number {
  return bigInt(2)
    .pow(1000)
    .toString()
    .split('')
    .reduce((sum, digit) => {
      return sum + parseInt(digit);
    }, 0);
}
