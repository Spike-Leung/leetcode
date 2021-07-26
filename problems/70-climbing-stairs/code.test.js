const climbStairs = require("./code");

test("3 stairs has 3 way to climb", () => {
  expect(climbStairs(2)).toBe(2);
});

test("3 stairs has 3 way to climb", () => {
  expect(climbStairs(3)).toBe(3);
});

test("4 stairs has 5 way to climb", () => {
  expect(climbStairs(4)).toBe(5);
});

test("5 stairs has 8 way to climb", () => {
  expect(climbStairs(5)).toBe(8);
});
