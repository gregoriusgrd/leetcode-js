// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/description/

var reverse = function (x) {
  const absolute = Math.abs(x);
  const invert = absolute.toString();
  const swap = invert.split("").reverse().join("");
  const invertBack = parseInt(swap);
  const result = invertBack * Math.sign(x);
  const limit = Math.pow(2, 31);
  if (result < -limit || result > limit - 1) return 0;
  return result;
};

// to-do (persingkat)
