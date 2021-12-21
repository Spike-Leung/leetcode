const sumNums = require("./code");

const sum = 6;
const n = 3;
test(`Sum of ${n} is ${sum}`, () => {
  expect(sumNums(n)).toBe(sum);
});

const sum1 = 45;
const n1 = 9;
test(`Sum of ${n1} is ${sum1}`, () => {
  expect(sumNums(n1)).toBe(sum1);
});
