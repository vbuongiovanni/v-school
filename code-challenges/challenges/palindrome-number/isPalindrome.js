// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

const isPalinDrome = x => {
  return parseInt(x.toString().split("").reverse().join("")) === x;
}

module.exports = isPalinDrome;