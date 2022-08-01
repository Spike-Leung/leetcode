const printNumbers = require("./code");
const printNumbers2 = require("./code.2");

const arr1 = [1,2,3,4,5,6,7,8,9];

test(`n = 1 print: ${arr1}`, () => {
  expect(printNumbers(1).toString()).toEqual(arr1.toString());
  expect(printNumbers2(1).toString()).toEqual(arr1.toString());
});
