const countDigitOne = require("./code");

const number = 12;
const count = 5;
test(`${number} has ${count} digit one`, () => {
  expect(countDigitOne(number)).toBe(count);
});

const number1 = 13;
const count1 = 6;
test(`${number1} has ${count1} digit one`, () => {
  expect(countDigitOne(number1)).toBe(count1);
});

const number2 = 1;
const count2 = 1;
test(`${number2} has ${count2} digit one`, () => {
  expect(countDigitOne(number2)).toBe(count2);
});

const number3 = 0;
const count3 = 0;
test(`${number3} has ${count3} digit one`, () => {
  expect(countDigitOne(number3)).toBe(count3);
});
