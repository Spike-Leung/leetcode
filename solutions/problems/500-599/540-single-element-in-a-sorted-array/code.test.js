const singleNonDuplicate = require("./code");

const nums = [1,1,2,3,3,4,4,8,8];
const target = 2;
test(`Single number in ${nums} is ${target}`, () => {
  expect(singleNonDuplicate(nums)).toBe(target);
});

const nums1 = [3,3,7,7,10,11,11];
const target1 = 10;
test(`Single number in ${nums1} is ${target1}`, () => {
  expect(singleNonDuplicate(nums1)).toBe(target1);
});

const nums2 = [1];
const target2 = 1;
test(`Single number in ${nums2} is ${target2}`, () => {
  expect(singleNonDuplicate(nums2)).toBe(target2);
});
