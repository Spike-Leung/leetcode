const isNumber = require("./code");

const validNumericStrs = ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"];
const inValidNumericStrs = ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4", ".", ".e", "e", "e12", "+", "-", "e--", " 1 2 "];

test(`${validNumericStrs} is all valid`, () => {
  expect(validNumericStrs.every((s) => isNumber(s))).toBe(true);
});

test(`${inValidNumericStrs} is all invalid`, () => {
  expect(inValidNumericStrs.some((s) => isNumber(s))).toBe(false);
});
