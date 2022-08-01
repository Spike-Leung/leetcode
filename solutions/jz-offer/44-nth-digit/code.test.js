const findNthDigit = require("./code");

const nth = 3;
const digit = 3;
test(`${nth} nth digit is ${digit}`, () => {
  expect(findNthDigit(nth)).toBe(digit);
});

const nth1 = 11;
const digit1 = 0;
test(`${nth1} nth digit is ${digit1}`, () => {
  expect(findNthDigit(nth1)).toBe(digit1);
});

const nth2 = 19;
const digit2 = 4;
test(`${nth2} nth digit is ${digit2}`, () => {
  expect(findNthDigit(nth2)).toBe(digit2);
});

const nth3 = 20;
const digit3 = 1;
test(`${nth3} nth digit is ${digit3}`, () => {
  expect(findNthDigit(nth3)).toBe(digit3);
});

const nth4 = 1000;
const digit4 = 3;
test(`${nth4} nth digit is ${digit4}`, () => {
  expect(findNthDigit(nth4)).toBe(digit4);
});

const nth5 = 1001;
const digit5 = 7;
test(`${nth5} nth digit is ${digit5}`, () => {
  expect(findNthDigit(nth5)).toBe(digit5);
});

const nth6 = 1002;
const digit6 = 0;
test(`${nth6} nth digit is ${digit6}`, () => {
  expect(findNthDigit(nth6)).toBe(digit6);
});
