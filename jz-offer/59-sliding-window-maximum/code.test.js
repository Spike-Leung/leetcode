const maxSlidingWindow = require("./code");

const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;
const result = [3,3,5,5,6,7];
test(`Maximum of ${nums} with window ${k} are ${result}`, () => {
  expect(maxSlidingWindow(nums, k)).toEqual(result);
});

const nums1 = [1];
const k1 = 1;
const result1 = [1];
test(`Maximum of ${nums1} with window ${k1} are ${result1}`, () => {
  expect(maxSlidingWindow(nums1, k1)).toEqual(result1);
});

const nums2 = [];
const k2 = 1;
const result2 = [];
test(`Maximum of ${nums2} with window ${k2} are ${result2}`, () => {
  expect(maxSlidingWindow(nums2, k2)).toEqual(result2);
});
