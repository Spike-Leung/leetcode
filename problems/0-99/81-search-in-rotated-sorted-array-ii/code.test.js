const search = require("./code");

test("nums = [2,5,6,0,0,1,2], target = 0", () => {
  expect(search([2,5,6,0,0,1,2], 0)).toBe(true);
});

test("nums = [2,5,6,0,0,1,1,1,1,1,2,2,2,2], target = 0", () => {
  expect(search([2,5,6,0,0,1,1,1,1,1,2,2,2,2], 0)).toBe(true);
});

test("nums = [2,5,6,0,0,1,2], target = 3", () => {
  expect(search([2,5,6,0,0,1,2], 3)).toBe(false);
});

test("nums = [2], target = 2", () => {
  expect(search([2], 2)).toBe(true);
});

test("nums = [2], target = 4", () => {
  expect(search([2], 4)).toBe(false);
});

test("nums = [1,1,0,1,1,1,1,1,1,1,1], target = 0", () => {
  expect(search([1,1,0,1,1,1,1,1,1,1,1], 0)).toBe(true);
});
