const minSubArrayLen = require("./code");

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
const res = 2;
test(`Min subarray length of nums: ${nums} and target: ${target} is ${res}`, () => {
  expect(minSubArrayLen(target, nums)).toBe(res);
});

const target1 = 4;
const nums1 = [1, 4, 4];
const res1 = 1;
test(`Min subarray length of nums: ${nums1} and target: ${target1} is ${res1}`, () => {
  expect(minSubArrayLen(target1, nums1)).toBe(res1);
});

const target2 = 11;
const nums2 = [1, 1, 1, 1, 1, 1, 1, 1];
const res2 = 0;
test(`Min subarray length of nums: ${nums2} and target: ${target2} is ${res2}`, () => {
  expect(minSubArrayLen(target2, nums2)).toBe(res2);
});
