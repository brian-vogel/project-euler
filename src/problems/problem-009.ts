// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

export function problem_009() {
  const target = 1000;

  for (let a = 1; a < target; a++) {
    for (let b = a; b < target; b++) {
      let c = target - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
}
