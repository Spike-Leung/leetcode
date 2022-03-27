const hasAlternatingBits = require("./code");

const num = 5;
test(`${num} has alternating bits`, () => {
  expect(hasAlternatingBits(num)).toBe(true);
});

const num1 = 7;
test(`${num1} NOT has alternating bits`, () => {
  expect(hasAlternatingBits(num1)).toBe(false);
});

const num2 = 11;
test(`${num2} NOT has alternating bits`, () => {
  expect(hasAlternatingBits(num2)).toBe(false);
});
