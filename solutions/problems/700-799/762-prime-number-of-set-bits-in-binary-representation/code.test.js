const countPrimeSetBits = require("./code");

const left = 6;
const right = 10;
const res = 4;
test(`PrimeSetBits count between ${left} and ${right} is ${res}`, () => {
  expect(countPrimeSetBits(left, right)).toBe(res);
});

const left1 = 10;
const right1 = 15;
const res1 = 5;
test(`PrimeSetBits count between ${left1} and ${right1} is ${res1}`, () => {
  expect(countPrimeSetBits(left1, right1)).toBe(res1);
});
