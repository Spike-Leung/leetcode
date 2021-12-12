const nthUglyNumber = require("./code");

const nth = 10;
const num = 12;
test(`${nth} nth ugly number is ${num}`, () => {
  expect(nthUglyNumber(nth)).toBe(num);
});

const nth1 = 1;
const num1 = 1;
test(`${nth1} nth ugly number is ${num1}`, () => {
  expect(nthUglyNumber(nth1)).toBe(num1);
});

const nth2 = 2;
const num2 = 2;
test(`${nth2} nth ugly number is ${num2}`, () => {
  expect(nthUglyNumber(nth2)).toBe(num2);
});
