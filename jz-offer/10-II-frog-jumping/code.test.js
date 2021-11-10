const numWays = require("./code");

test("There is 2 ways to stair 2", () => {
  expect(numWays(2)).toBe(2);
});

test("There is 21 ways to stair 7", () => {
  expect(numWays(7)).toBe(21);
});

test("There is 1 ways to stair 0", () => {
  expect(numWays(0)).toBe(1);
});
