// https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript

// closures
function createHelloWorld() {
  const message = "Hello World";

  return function () {
    return message;
  };
}
