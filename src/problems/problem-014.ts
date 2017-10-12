// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

export function problem_014(): number {
  const limit = 1000000;

  let cache = {};
  let number = 0;
  let maxChain = 0;
  for(let i = 1; i <= limit; i++) {
    let n = i;
    let chain = 1;
    while(n != 1) {
      if(cache[n]) {
        chain += cache[n]-1;
        break;
      }
      
      if(n%2 === 0){
        n /= 2;
        chain++;
      } else {
        n = (3*n + 1)/2
        chain += 2;
      }
    }
    cache[i] = chain;
    if(maxChain < chain) {
      maxChain = chain;
      number = i;
    }
  }
  
  return number;
}
