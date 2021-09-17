const merge = require("./code");

test(`nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 should output [1,2,2,3,5,6]`, () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  expect(nums1.toString()).toBe([1, 2, 2, 3, 5, 6].toString());
});

test(`nums1 = [1], m = 1, nums2 = [], n = 0 should output [1]`, () => {
  const nums1 = [1];
  merge(nums1, 1, [], 0);
  expect(nums1.toString()).toBe([1].toString());
});

test(`nums1 = [0], m = 0, nums2 = [1], n = 1 should output [1]`, () => {
  const nums1 = [0];
  merge(nums1, 0, [1], 1);
  expect(nums1.toString()).toBe([1].toString());
});

test(`nums1 = [2, 0], m = 1, nums2 = [1], n = 1 should output [1, 2]`, () => {
  const nums1 = [2, 0];
  merge(nums1, 1, [1], 1);
  expect(nums1.toString()).toBe([1, 2].toString());
});

test(`nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3 should output [1, 2, 3, 4, 5, 6]`, () => {
  const nums1 = [4, 5, 6, 0, 0, 0];
  merge(nums1, 3, [1, 2, 3], 3);
  expect(nums1.toString()).toBe([1, 2, 3, 4, 5, 6].toString());
});

test(`nums1 = [1,2,4,5,6,0], m = 5, nums2 = [3], n = 1 should output [1, 2, 3, 4, 5, 6]`, () => {
  const nums1 = [1, 2, 4, 5, 6];
  merge(nums1, 5, [3], 1);
  expect(nums1.toString()).toBe([1, 2, 3, 4, 5, 6].toString());
});

test(`nums1 = [-1, 0, 0, 3, 3, 3, 0, 0], m = 6, nums2 = [1, 2, 2], n = 3 should output [-1, 0, 0, 1, 2, 2, 3, 3, 3]`, () => {
  const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0];
  merge(nums1, 6, [1, 2, 2], 3);
  expect(nums1.toString()).toBe([-1, 0, 0, 1, 2, 2, 3, 3, 3].toString());
});
