const lastRemaining = require("./code");

const n = 5;
const m = 3;
const target = 3;
test(`Length is ${n}, skip is ${m}, last remaining is ${target}`, () => {
  expect(lastRemaining(n, m)).toBe(target);
});

const n1 = 5;
const m1 = 3;
const target1 = 3;
test(`Length is ${n1}, skip is ${m1}, last remaining is ${target1}`, () => {
  expect(lastRemaining(n1, m1)).toBe(target1);
});
