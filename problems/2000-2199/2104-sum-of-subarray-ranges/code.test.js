const subArrayRanges = require("./code");

const num = [1,2,3];
const sum = 4;
test(`Sub Array Sum of ${num} is ${sum}`, () => {
  expect(subArrayRanges(num)).toBe(sum);
});

const num1 = [1,3,3];
const sum1 = 4;
test(`Sub Array Sum of ${num1} is ${sum1}`, () => {
  expect(subArrayRanges(num1)).toBe(sum1);
});

const num2 = [4,-2,-3,4,1];
const sum2 = 59;
test(`Sub Array Sum of ${num2} is ${sum2}`, () => {
  expect(subArrayRanges(num2)).toBe(sum2);
});
