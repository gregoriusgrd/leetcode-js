// 2390. Removing Stars From a String
// https://leetcode.com/problems/removing-stars-from-a-string/description/

var removeStars = function (s) {
  let stack = [];
  for (let char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log(removeStars("leet**cod*e"));
