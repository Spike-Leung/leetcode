const dominantIndex = require("./code");

const nums = [3,6,1,0];
const result = 1;
test(`Dominant index of ${nums} is ${result}`, () => {
  expect(dominantIndex(nums)).toBe(result);
});

const nums1 = [1,2,3,4];
const result1 = -1;
test(`Dominant index of ${nums1} is ${result1}`, () => {
  expect(dominantIndex(nums1)).toBe(result1);
});

const nums2 = [1];
const result2 = 0;
test(`Dominant index of ${nums2} is ${result2}`, () => {
  expect(dominantIndex(nums2)).toBe(result2);
});
