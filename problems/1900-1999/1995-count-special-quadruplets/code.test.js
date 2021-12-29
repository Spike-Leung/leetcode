const countQuadruplets = require("./code");

const nums = [1,2,3,6];
const count = 1;
test(`There are ${count} quadruplets in ${nums}`, () => {
  expect(countQuadruplets(nums)).toBe(count);
});

const nums1 = [3,3,6,4,5];
const count1 = 0;
test(`There are ${count1} quadruplets in ${nums1}`, () => {
  expect(countQuadruplets(nums1)).toBe(count1);
});

const nums2 = [1,1,1,3,5];
const count2 = 4;
test(`There are ${count2} quadruplets in ${nums2}`, () => {
  expect(countQuadruplets(nums2)).toBe(count2);
});
