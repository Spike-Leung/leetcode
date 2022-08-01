const lastRemaining = require("./code");

const n = 9;
const lastNum = 6;
test(`Last remaining if [1, ${n}] is ${lastNum}`, () => {
  expect(lastRemaining(n)).toBe(lastNum);
});

const n1 = 3;
const lastNum1 = 2;
test(`Last remaining if [1, ${n1}] is ${lastNum1}`, () => {
  expect(lastRemaining(n1)).toBe(lastNum1);
});

const n2 = 1;
const lastNum2 = 1;
test(`Last remaining if [2, ${n2}] is ${lastNum2}`, () => {
  expect(lastRemaining(n2)).toBe(lastNum2);
});

const n3 = 5;
const lastNum3 = 2;
test(`Last remaining if [3, ${n3}] is ${lastNum3}`, () => {
  expect(lastRemaining(n3)).toBe(lastNum3);
});
