// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

export function problem_004() {
  let largestPalindrome = 0;

  for (let i = 100; i < 1000; i++) {
    for (let j = i + 1; j < 1000; j++) {
      let possiblePalindrome = i * j;
      if ((possiblePalindrome > largestPalindrome) &&
          (possiblePalindrome.toString() === possiblePalindrome.toString().split('').reverse().join(''))) {
        largestPalindrome = possiblePalindrome;
      }
    }
  }
  return largestPalindrome;
}