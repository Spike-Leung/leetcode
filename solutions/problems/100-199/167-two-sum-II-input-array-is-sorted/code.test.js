const twoSum = require("./code");

test("nums = [2,7,11,15], target = 9 output = [1, 2]", () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([1, 2]);
});

test("nums = [-1, 1, 2, 3, 4], target = 6 output = [3, 5]", () => {
  expect(twoSum([-1, 1, 2, 3, 4], 6)).toEqual([3, 5]);
});

test("nums = [3, 3], target = 6 output = [1, 2]", () => {
  expect(twoSum([3, 3], 6)).toEqual([1, 2]);
});

test("nums = [-1, 0], target = -1 output = [1, 2]", () => {
  expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
});
