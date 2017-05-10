// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

export function problem_005() {
  let n = 1;

  while (true) {
    let doesNotDivide = false;
    for (let i = 1; i <= 20; i++) {
      if (n % i) {
        doesNotDivide = true;
        break;
      }
    }
    if(doesNotDivide) {
      n++;
    } else {
      return n;
    }
  }
}