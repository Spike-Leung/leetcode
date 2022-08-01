const maximumDifference = require("./code");

const nums = [7,1,5,4];
const res = 4;
test(`Maximum difference of ${nums} is ${res}`, () => {
  expect(maximumDifference(nums)).toBe(res);
});

const nums1 = [9,4,3,2];
const res1 = -1;
test(`Maximum difference of ${nums1} is ${res1}`, () => {
  expect(maximumDifference(nums1)).toBe(res1);
});

const nums2 = [1,5,2,10];
const res2 = 9;
test(`Maximum difference of ${nums2} is ${res2}`, () => {
  expect(maximumDifference(nums2)).toBe(res2);
});
