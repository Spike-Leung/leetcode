const numberOfSteps = require("./code");

const num = 14;
const step = 6;
test(`There are ${step} steps to make ${num} be zero`, () => {
  expect(numberOfSteps(num)).toBe(step);
});

const num1 = 8;
const step1 = 4;
test(`There are ${step1} steps to make ${num1} be zero`, () => {
  expect(numberOfSteps(num1)).toBe(step1);
});
