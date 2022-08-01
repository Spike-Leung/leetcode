const totalMoney = require("./code");

const n = 4;
const sum = 10;
test(`Sum of ${n} days is ${sum}`, () => {
  expect(totalMoney(n)).toBe(sum);
});

const n1 = 10;
const sum1 = 37;
test(`Sum of ${n1} days is ${sum1}`, () => {
  expect(totalMoney(n1)).toBe(sum1);
});

const n2 = 20;
const sum2 = 96;
test(`Sum of ${n2} days is ${sum2}`, () => {
  expect(totalMoney(n2)).toBe(sum2);
});
