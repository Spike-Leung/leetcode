const findMinDifference = require("./code");

const timePoints = ["23:59","00:00"];
const diff = 1;
test(`Min difference between ${timePoints} is ${diff}`, () => {
  expect(findMinDifference(timePoints)).toBe(diff);
});

const timePoints1 = ["00:00","23:59","00:00"];
const diff1 = 0;
test(`Min difference between ${timePoints1} is ${diff1}`, () => {
  expect(findMinDifference(timePoints1)).toBe(diff1);
});

const timePoints2 = ["01:01", "02:01","03:00"];
const diff2 = 59;
test(`Min difference between ${timePoints2} is ${diff2}`, () => {
  expect(findMinDifference(timePoints2)).toBe(diff2);
});
