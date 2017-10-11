// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
import { sieve_of_eratosthenes } from './helpers/sieve_of_eratosthenes'

export function problem_005() {
  const target = 20;
  const primes = sieve_of_eratosthenes(target);

  let result = 1;
  for (let i = 0; i < primes.length; i++) {
    const a = Math.floor(Math.log(target) / Math.log(primes[i]));
    result *= Math.pow(primes[i], a);
  }
  return result;
}