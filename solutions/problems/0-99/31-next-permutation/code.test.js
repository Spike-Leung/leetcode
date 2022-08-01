const nextPermutation = require("./code");

const nums = [1,2,3];
const res = [1,3,2];
test(`Next permutation of ${nums} is ${res}`, () => {
  nextPermutation(nums);
  expect(nums).toEqual(res);
});

const nums1 = [3,2,1];
const res1 = [1,2,3];
test(`Next permutation of ${nums1} is ${res1}`, () => {
  nextPermutation(nums1);
  expect(nums1).toEqual(res1);
});

const nums2 = [1,1,5];
const res2 = [1,5,1];
test(`Next permutation of ${nums2} is ${res2}`, () => {
  nextPermutation(nums2);
  expect(nums2).toEqual(res2);
});
