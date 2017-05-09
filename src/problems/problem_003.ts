// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
import { sieve_of_eratosthenes } from './helpers/sieve_of_eratosthenes'

export function problem_003() {
  const n = 600851475143;
  const primes = sieve_of_eratosthenes( Math.sqrt(n) );

  for(let i = primes.length - 1; i > 0; i--) {
    if(n % primes[i] === 0) {
      return primes[i];
    }
  }
}