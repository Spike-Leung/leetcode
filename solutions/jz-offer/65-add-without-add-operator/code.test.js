const add = require("./code");

const a = 1;
const b = 1;
const sum = 2;
test(`Sum of ${a} and ${b} is ${sum}`, () => {
  expect(add(a, b)).toBe(sum);
});

const a1 = 1;
const b1 = -1;
const sum1 = 0;
test(`Sum of ${a1} and ${b1} is ${sum1}`, () => {
  expect(add(a1, b1)).toBe(sum1);
});

const a2 = 1;
const b2 = -2;
const sum2 = -1;
test(`Sum of ${a2} and ${b2} is ${sum2}`, () => {
  expect(add(a2, b2)).toBe(sum2);
});
