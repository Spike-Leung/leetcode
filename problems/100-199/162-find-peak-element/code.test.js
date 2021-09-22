const findPeakElement = require("./code");

test("nums = [1,2,3,1] peakIndex = 2", () => {
  expect(findPeakElement([1, 2, 3, 1])).toBe(2);
});

test("nums = [1,2,1,3,5,6,4] peakIndex = 1 or 5", () => {
  expect(findPeakElement([1, 2, 1, 3, 5, 6, 4]).toString()).toMatch(/[1,5]/);
});

test("nums = [1] peakIndex = 0", () => {
  expect(findPeakElement([1])).toBe(0);
});

test("nums = [1, 2] peakIndex = 1", () => {
  expect(findPeakElement([1, 2])).toBe(1);
});

test("nums = [2, 1] peakIndex = 0", () => {
  expect(findPeakElement([2, 1])).toBe(0);
});
