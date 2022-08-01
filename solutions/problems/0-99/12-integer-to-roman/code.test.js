const intToRoman = require("./code");

const integer = 3;
const roman = "III";
test(`${integer} should convert to ${roman}`, () => {
  expect(intToRoman(integer)).toBe(roman);
});

const integer1 = 4;
const roman1 = "IV";
test(`${integer1} should convert to ${roman1}`, () => {
  expect(intToRoman(integer1)).toBe(roman1);
});

const integer2 = 9;
const roman2 = "IX";
test(`${integer2} should convert to ${roman2}`, () => {
  expect(intToRoman(integer2)).toBe(roman2);
});

const integer3 = 58;
const roman3 = "LVIII";
test(`${integer3} should convert to ${roman3}`, () => {
  expect(intToRoman(integer3)).toBe(roman3);
});

const integer4 = 1994;
const roman4 = "MCMXCIV";
test(`${integer4} should convert to ${roman4}`, () => {
  expect(intToRoman(integer4)).toBe(roman4);
});

const integer5 = 2000;
const roman5 = "MM";
test(`${integer5} should convert to ${roman5}`, () => {
  expect(intToRoman(integer5)).toBe(roman5);
});
