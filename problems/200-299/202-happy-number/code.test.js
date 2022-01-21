const isHappy = require("./code");

const n = 19;
test(`${n} is happy number`, () => {
  expect(isHappy(n)).toBe(true);
});

const n1 = 2;
test(`${n1} is NOT happy number`, () => {
  expect(isHappy(n1)).toBe(false);
});

const n2 = 1;
test(`${n2} is NOT happy number`, () => {
  expect(isHappy(n2)).toBe(true);
});
