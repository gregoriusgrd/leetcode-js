// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

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
