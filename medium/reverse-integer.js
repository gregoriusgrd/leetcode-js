// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/description/

var reverse = function (x) {
  const absolute = Math.abs(x);
  const convert = absolute.toString();
  const swap = convert.split("").reverse().join("");
  const convertBack = parseInt(swap);
  const result = convertBack * Math.sign(x);
  const limit = Math.pow(2, 31);
  if (result < -limit || result > limit - 1) return 0;
  return result;
};

// to-do (persingkat)
