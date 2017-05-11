// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.
import {sieve_of_eratosthenes} from './helpers/sieve_of_eratosthenes';

export function problem_010() {
  return sieve_of_eratosthenes(2000000).reduce((a, b) => a + b, 0);
}
