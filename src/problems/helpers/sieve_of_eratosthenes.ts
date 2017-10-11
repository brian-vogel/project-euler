export function sieve_of_eratosthenes(n: number): number[] {
  const upperLimit = Math.sqrt(n);
  let isPrimeNumbers: boolean[] = [];

  for (let i = 0; i < n; i++) {
    isPrimeNumbers.push(true);
  }

  isPrimeNumbers[1] = false;
  for (let i = 2; i < upperLimit; i++) {
    if (isPrimeNumbers[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrimeNumbers[j] = false;
      }
    }
  }

  var ret = [];
  isPrimeNumbers.forEach(function (num, index) {
    if (num) {
      ret.push(index);
    }
  });
  return ret;
}