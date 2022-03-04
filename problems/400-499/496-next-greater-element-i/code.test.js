const nextGreaterElement = require("./code");

const num1 = [4,1,2];
const num2 = [1,3,4,2];
const nge = [-1,3,-1];
test(`num1: ${num1}, num2: ${num2}, NGE should be ${nge}`, () => {
  expect(nextGreaterElement(num1, num2)).toEqual(nge);
});

const num1a = [2,4];
const num2a = [1,2,3,4];
const nge2 = [3,-1];
test(`num1: ${num1a}, num2: ${num2a}, NGE should be ${nge2}`, () => {
  expect(nextGreaterElement(num1a, num2a)).toEqual(nge2);
});
