const isPerfectSquare = require("./code");

test(`16 is perfect square`, () => {
  expect(isPerfectSquare(16)).toBe(true);
});

test(`25 is perfect square`, () => {
  expect(isPerfectSquare(25)).toBe(true);
});

test(`23 is not perfect square`, () => {
  expect(isPerfectSquare(23)).toBe(false);
});

test(`5 is not perfect square`, () => {
  expect(isPerfectSquare(5)).toBe(false);
});

test(`1 is perfect square`, () => {
  expect(isPerfectSquare(1)).toBe(true);
});
