export function find_divisors(n: number): number[] {
  const sqrt_n = Math.sqrt(n);
  const divisors = [];

  for(let i = 1; i <= sqrt_n; i++) {
    if((n % i) == 0) {
      divisors.push(i);
      divisors.push(n/i);
    }
    if(i*i === n) {
      divisors.pop();
    }
  }

  return divisors;
}
