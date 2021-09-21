const searchInsert = require("./code");

test("nums = [1,3,5,6], target = 5, output = 2", () => {
  expect(searchInsert([1,3,5,6], 5)).toBe(2);
});

test("nums = [1,3,5,6], target = 2, output = 1", () => {
  expect(searchInsert([1,3,5,6], 2)).toBe(1);
});

test("nums = [1,3,5,6], target = 7, output = 4", () => {
  expect(searchInsert([1,3,5,6], 7)).toBe(4);
});

test("nums = [1,3,5,6], target = 0, output = 0", () => {
  expect(searchInsert([1,3,5,6], 0)).toBe(0);
});
