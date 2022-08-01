const search = require("./code");

const arr = [-1,0,3,5,9,12];

test("nums = ${arr}, target = 9, output = 4", () => {
  expect(search(arr, 9)).toBe(4);
});

test(`nums = ${arr}, target = 2, output = -1`, () => {
  expect(search(arr, 2)).toBe(-1);
});
