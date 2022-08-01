const translateNum = require("./code");

const number = 12258;
const count = 5;
test(`There is ${count} ways to translate ${number}`, () => {
  expect(translateNum(number)).toBe(count);
});

const number1 = 125;
const count1 = 3;
test(`There is ${count1} ways to translate ${number1}`, () => {
  expect(translateNum(number1)).toBe(count1);
});

const number2 = 135;
const count2 = 2;
test(`There is ${count2} ways to translate ${number2}`, () => {
  expect(translateNum(number2)).toBe(count2);
});
