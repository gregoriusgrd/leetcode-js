// 2620. Counter
// https://leetcode.com/problems/counter/description/

// closure

var createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

/*

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11

*/
