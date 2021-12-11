const minNumber = require("./code");

const arr = [10, 2];
const minNum = "102";
test(`minNum of ${arr} is ${minNum}`, () => {
  expect(minNumber(arr)).toBe(minNum);
});

const arr1 = [3,30,34,5,9];
const minNum1 = "3033459";
test(`minNum of ${arr1} is ${minNum1}`, () => {
  expect(minNumber(arr1)).toBe(minNum1);
});
