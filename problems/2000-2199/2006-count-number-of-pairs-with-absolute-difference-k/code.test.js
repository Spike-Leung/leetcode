const countKDifference = require("./code");

const nums = [1,2,2,1];
const k = 1;
const res = 4;
test(`nums: ${nums}, k: ${k}, result: ${res}`, () => {
  expect(countKDifference(nums, k)).toBe(res);
});

const nums1 = [1,3];
const k1 = 3;
const res1 = 0;
test(`nums: ${nums1}, k: ${k1}, result: ${res1}`, () => {
  expect(countKDifference(nums1, k1)).toBe(res1);
});

const nums2 = [3,2,1,5,4];
const k2 = 2;
const res2 = 3;
test(`nums: ${nums2}, k: ${k2}, result: ${res2}`, () => {
  expect(countKDifference(nums2, k2)).toBe(res2);
});
