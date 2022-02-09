const removeElement = require("./code");

const nums = [3,2,2,3];
const val = 3;
test(`nums: ${nums}, val: ${val}`, () => {
  expect(removeElement(nums, val)).toBe(2);
  expect(nums.slice(0, 2)).toEqual([2,2]);
});

const nums1 = [3,3];
const val1 = 5;
test(`nums: ${nums1}, val: ${val1}`, () => {
  expect(removeElement(nums1, val1)).toBe(2);
  expect(nums1.slice(0, 2)).toEqual([3,3]);
});
