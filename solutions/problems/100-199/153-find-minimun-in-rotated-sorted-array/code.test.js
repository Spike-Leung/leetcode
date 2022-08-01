const findMin = require("./code");

test("nums = [3,4,5,1,2] min = 1", () => {
  expect(findMin([3,4,5,1,2])).toBe(1);
});

test("nums = [4,5,6,7,0,1,2] min = 0", () => {
  expect(findMin([4,5,6,7,0,1,2])).toBe(0);
});

test("nums = [7,0,1,2,3,4,5,6] min = 0", () => {
  expect(findMin([7,0,1,2,3,4,5,6])).toBe(0);
});

test("nums = [0,1,2,3,4,5,6,7] min = 0", () => {
  expect(findMin([0,1,2,3,4,5,6,7])).toBe(0);
});

test("nums = [2,3,4,5,6,7] min = 2", () => {
  expect(findMin([2,3,4,5,6,7])).toBe(2);
});

test("nums = [4] min = 4", () => {
  expect(findMin([4])).toBe(4);
});

test("nums = [2, 3] min = 2", () => {
  expect(findMin([2, 3])).toBe(2);
});
