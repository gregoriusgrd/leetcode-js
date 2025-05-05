// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/description/

// with string
var isPalindrome = function (x) {
  let invert = x.toString();
  let swap = invert.split("").reverse().join("");
  return invert === swap;
};

// without string (soon)
