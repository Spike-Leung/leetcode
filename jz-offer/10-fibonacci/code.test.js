const fib = require("./code");

test("fib of 1 is 1", () => {
  expect(fib(1)).toBe(1);
});

test("fib of 3 is 2", () => {
  expect(fib(3)).toBe(2);
});

test("fib of 5 is 5", () => {
  expect(fib(5)).toBe(5);
});

test("fib of 81 is 107920472", () => {
  expect(fib(81)).toBe(107920472);
});
