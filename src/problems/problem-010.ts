// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

//142913828922
import { sieve_of_eratosthenes } from './helpers/sieve_of_eratosthenes';

export function problem_010() {
  const primes = sieve_of_eratosthenes(2000000);

  let sum = 0;
  for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
  }
  return sum;
}
