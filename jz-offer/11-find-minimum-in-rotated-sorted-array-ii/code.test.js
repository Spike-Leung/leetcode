const minArray = require("./code");

const arr1 = [3,4,5,1,2];
const arr2 = [2,2,2,0,1];
const arr3 = [1,2,3,4,5];
const arr4 = [1,1,1,0,1];
const arr5 = [1,0,1,1,1];
const arr6 = [3,3,1,1,1];

test(`${arr1} minimum is 1`, () => {
  expect(minArray(arr1)).toBe(1);
});

test(`${arr2} minimum is 0`, () => {
  expect(minArray(arr2)).toBe(0);
});

test(`${arr3} minimum is 1`, () => {
  expect(minArray(arr3)).toBe(1);
});

test(`${arr4} minimum is 0`, () => {
  expect(minArray(arr4)).toBe(0);
});

test(`${arr5} minimum is 0`, () => {
  expect(minArray(arr5)).toBe(0);
});

test(`${arr6} minimum is 1`, () => {
  expect(minArray(arr6)).toBe(1);
});
