const isStraight = require("./code");

const arr = [1,2,3,4,5];
test(`${arr} is straight`, () => {
  expect(isStraight(arr)).toBe(true);
});

const arr1 = [0,0,1,2,5];
test(`${arr1} is straight`, () => {
  expect(isStraight(arr1)).toBe(true);
});

const arr2 = [0,0,1,2,8];
test(`${arr2} is not straight`, () => {
  expect(isStraight(arr2)).toBe(false);
});

const arr3 = [1,2,3,5,6];
test(`${arr3} is not straight`, () => {
  expect(isStraight(arr3)).toBe(false);
});
