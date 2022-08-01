const search = require("./code");

test("nums = [3,4,5,6,7,0,1,2], target = 0 output = 5", () => {
  expect(search([3,4,5,6,7,0,1,2], 0)).toBe(5);
});

test("nums = [3,4,5,6,7,0,1,2], target = 7 output = 4", () => {
  expect(search([3,4,5,6,7,0,1,2], 7)).toBe(4);
});

test("nums = [3,4,5,6,7,0,1,2], target = 9 output = -1", () => {
  expect(search([3,4,5,6,7,0,1,2], 9)).toBe(-1);
});

test("nums = [0,1,2,3,4,5], target = 3 output = 3", () => {
  expect(search([0,1,2,3,4,5], 3)).toBe(3);
});

test("nums = [3, 1], target = 1 output = 1", () => {
  expect(search([3,1], 1)).toBe(1);
});

test("nums = [1], target = 0 output = -1", () => {
  expect(search([1], 0)).toBe(-1);
});
