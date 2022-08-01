const search = require("./search");
const leftBound = require("./left-bound");
const rightBound = require("./right-bound");

const emptyArr = [];
const arr = [-1, 0, 3, 4, 4, 4, 4, 5, 9, 12];

// search
test(`nums = ${arr}, target = 9, output = 8`, () => {
  expect(search(arr, 9)).toBe(8);
});

test(`nums = ${arr}, target = 2, output = -1`, () => {
  expect(search(arr, 2)).toBe(-1);
});

test(`nums = ${emptyArr}, target = 9, output = -1`, () => {
  expect(search(emptyArr, 9)).toBe(-1);
});


// left bound
/*
 * 边界条件：
 * 1. target 小于所有的数
 * 2. target 大于所有的数
 * 3. target 在数的范围内，但不是数组中的数
 */
test(`nums = ${arr}, target = 4, output = 3`, () => {
  expect(leftBound(arr, 4)).toBe(3);
});

test(`nums = ${arr}, target = 2, output = -1`, () => {
  expect(leftBound(arr, 2)).toBe(-1);
});

test(`nums = ${arr}, target = 20, output = -1`, () => {
  expect(leftBound(arr, 20)).toBe(-1);
});

test(`nums = ${arr}, target = -2, output = -1`, () => {
  expect(leftBound(arr, -2)).toBe(-1);
});

test(`nums = ${emptyArr}, target = 9, output = -1`, () => {
  expect(leftBound(emptyArr, 9)).toBe(-1);
});


// right bound
test(`nums = ${arr}, target = 4, output = 6`, () => {
  expect(rightBound(arr, 4)).toBe(6);
});

test(`nums = ${arr}, target = 2, output = -1`, () => {
  expect(rightBound(arr, 2)).toBe(-1);
});

test(`nums = ${arr}, target = 20, output = -1`, () => {
  expect(rightBound(arr, 20)).toBe(-1);
});

test(`nums = ${arr}, target = -2, output = -1`, () => {
  expect(rightBound(arr, -2)).toBe(-1);
});

test(`nums = ${emptyArr}, target = 9, output = 8`, () => {
  expect(rightBound(emptyArr, 9)).toBe(-1);
});
