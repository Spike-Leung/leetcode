const missingNumber = require("./code");

const arr = [0, 1, 3];
const missingNum = 2;
test(`Missing number of ${arr} is ${missingNum}`, () => {
  expect(missingNumber(arr)).toBe(missingNum);
});

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 9];
const missingNum1 = 8;
test(`Missing number of ${arr1} is ${missingNum1}`, () => {
  expect(missingNumber(arr1)).toBe(missingNum1);
});

const arr2 = [0, 2, 3, 4, 5, 6, 7, 8, 9];
const missingNum2 = 1;
test(`Missing number of ${arr2} is ${missingNum2}`, () => {
  expect(missingNumber(arr2)).toBe(missingNum2);
});
