const search = require("./code");

const arr = [-1,0,3,5,9,12];

test(`nums = ${arr}, target = 4, output = 3`, () => {
  expect(search(arr, 4)).toBe(3);
});

test(`nums = ${arr}, target = 9, output = 4`, () => {
  expect(search(arr, 9)).toBe(4);
});

test(`nums = ${arr}, target = 11, output = 5`, () => {
  expect(search(arr, 11)).toBe(5);
});

test(`nums = ${arr}, target = 12, output = 5`, () => {
  expect(search(arr, 12)).toBe(5);
});
