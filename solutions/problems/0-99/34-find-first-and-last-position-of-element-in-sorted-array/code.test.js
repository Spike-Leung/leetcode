const searchRange = require("./code");

const arr1 = [5,7,7,8,8,10];
const arr2 = [5,5,5,5,5];
const arr3 = [5,5,8,9,9];
const arr4 = [];
const arr5 = [1];

test(`nums = ${arr1}, target = 8, range = [3, 4]`, () => {
  expect(searchRange(arr1, 8)).toEqual([3, 4]);
});

test(`nums = ${arr1}, target = 6, range = [-1, -1]`, () => {
  expect(searchRange(arr1, 6)).toEqual([-1, -1]);
});

test(`nums = ${arr2}, target = 5, range = [0, 4]`, () => {
  expect(searchRange(arr2, 5)).toEqual([0, 4]);
});

test(`nums = ${arr3}, target = 8, range = [2, 2]`, () => {
  expect(searchRange(arr3, 8)).toEqual([2, 2]);
});

test(`nums = ${arr4}, target = 8, range = [-1, -1]`, () => {
  expect(searchRange(arr4, 8)).toEqual([-1, -1]);
});

test(`nums = ${arr5}, target = 8, range = [-1, -1]`, () => {
  expect(searchRange(arr5, 8)).toEqual([-1, -1]);
});

test(`nums = ${arr5}, target = 1, range = [0, 0]`, () => {
  expect(searchRange(arr5, 1)).toEqual([0, 0]);
});
