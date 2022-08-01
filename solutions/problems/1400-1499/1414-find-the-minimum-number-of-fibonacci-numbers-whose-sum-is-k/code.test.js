const findMinFibonacciNumbers = require("./code");

const k = 7;
const count = 2;
test(`Min fibonacci numbers of sum '${k}' is ${count}`, () => {
  expect(findMinFibonacciNumbers(k)).toBe(count);
});

const k1 = 10;
const count1 = 2;
test(`Min fibonacci numbers of sum '${k1}' is ${count1}`, () => {
  expect(findMinFibonacciNumbers(k1)).toBe(count1);
});

const k2 = 19;
const count2 = 3;
test(`Min fibonacci numbers of sum '${k2}' is ${count2}`, () => {
  expect(findMinFibonacciNumbers(k2)).toBe(count2);
});
