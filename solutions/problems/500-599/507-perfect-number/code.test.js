const checkPerfectNumber = require("./code");

const num = 28;
test(`${num} is perfect number`, () => {
  expect(checkPerfectNumber(num)).toBe(true);
});

const num1 = 6;
test(`${num1} is perfect number`, () => {
  expect(checkPerfectNumber(num1)).toBe(true);
});

const num2 = 496;
test(`${num2} is perfect number`, () => {
  expect(checkPerfectNumber(num2)).toBe(true);
});

const num3 = 8128;
test(`${num3} is perfect number`, () => {
  expect(checkPerfectNumber(num3)).toBe(true);
});

const num4 = 4;
test(`${num4} is NOT perfect number`, () => {
  expect(checkPerfectNumber(num4)).toBe(false);
});
