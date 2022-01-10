const isAdditiveNumber = require("./code");

const str = "112358";
test(`${str} is additive number`, () => {
  expect(isAdditiveNumber(str)).toBe(true);
});

const str1 = "112378";
test(`${str1} is NOT additive number`, () => {
  expect(isAdditiveNumber(str1)).toBe(false);
});

const str2 = "199100199";
test(`${str2} is additive number`, () => {
  expect(isAdditiveNumber(str2)).toBe(true);
});
