// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10,001st prime number?
import { sieve_of_eratosthenes } from './helpers/sieve_of_eratosthenes';

export function problem_007() {
  let primes = sieve_of_eratosthenes(110000);
  return primes[10001];
}
