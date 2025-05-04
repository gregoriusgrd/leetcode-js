// 2667. Create Hello World Function
// https://leetcode.com/problems/create-hello-world-function/description/

// closures
function createHelloWorld() {
  const message = "Hello World";

  return function () {
    return message;
  };
}
