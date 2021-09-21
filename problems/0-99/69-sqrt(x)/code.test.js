const mySqrt = require("./code");

test("Sqxt(4) is 2", () => {
  expect(mySqrt(4)).toBe(2);
});

test("Sqxt(8) is 2", () => {
  expect(mySqrt(8)).toBe(2);
});

test("Sqxt(9) is 3", () => {
  expect(mySqrt(9)).toBe(3);
});

test("Sqxt(12) is 3", () => {
  expect(mySqrt(12)).toBe(3);
});

test("Sqxt(16) is 4", () => {
  expect(mySqrt(16)).toBe(4);
});
