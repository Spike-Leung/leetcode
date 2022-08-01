const minimumDifference = require("./code");

const nums = [90];
const k = 1;
const diff = 0;
test(`Minimum difference from ${nums} with ${k} is ${diff}`, () => {
  expect(minimumDifference(nums, k)).toBe(diff);
});

const nums1 = [9,4,1,7];
const k1 = 2;
const diff1 = 2;
test(`Minimum difference from ${nums1} with ${k1} is ${diff1}`, () => {
  expect(minimumDifference(nums1, k1)).toBe(diff1);
});
