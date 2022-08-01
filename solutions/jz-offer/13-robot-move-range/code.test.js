const { movingCount, calcSum } = require("./code");
x
test("sum of (12, 23) should be 8", () => {
  expect(calcSum(12, 23)).toBe(8);
})

test("sum of (0, 1) should be 1", () => {
  expect(calcSum(0, 1)).toBe(1);
})

test("m = 3, n = 2, k = 1, count should be 3", () => {
  expect(movingCount(3, 2, 1)).toBe(3);
});

test("m = 3, n = 1, k = 0, count should be 1", () => {
  expect(movingCount(3, 1, 0)).toBe(1);
});

test("m = 2, n = 2, k = 2, count should be 4", () => {
  expect(movingCount(2, 2, 4)).toBe(4);
});

test("m = 3, n = 2, k = 2, count should be 5", () => {
  expect(movingCount(3, 2, 2)).toBe(5);
});
