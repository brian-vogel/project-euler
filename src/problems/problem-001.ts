// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

// Alternative
export function problem_001(): number {
  return Array(1000)
    .fill(0)
    .map((x, i) => i)
    .filter((x) => ((x % 3 === 0) || (x % 5 === 0)))
    .reduce((a, b) => a + b, 0);
}
