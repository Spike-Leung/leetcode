const { findRepeatNumber, findRepeatNumber1, findRepeatNumber2 } = require("./code");

const arr = [2, 3, 1, 0, 2, 5, 3];
const arr1 = [1, 2, 3, 4, 5, 3];

test(`${arr} repeat number is 2 or 3`, () => {
  expect([2, 3]).toContain(findRepeatNumber(arr));
  expect([2, 3]).toContain(findRepeatNumber1(arr));
  expect([2, 3]).toContain(findRepeatNumber2(arr));
});

test(`${arr1} repeat number is 3`, () => {
  expect(findRepeatNumber(arr1)).toBe(3);
  expect(findRepeatNumber1(arr1)).toBe(3);
  expect(findRepeatNumber2(arr1)).toBe(3);
});
