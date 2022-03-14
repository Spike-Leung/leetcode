const countMaxOrSubsets = require("./code");

const nums = [3,1];
const count = 2;
test(`Max OrSubsets count of ${nums} is ${count}`, () => {
  expect(countMaxOrSubsets(nums)).toBe(count);
});

const nums1 = [2,2,2];
const count1 = 7;
test(`Max OrSubsets count of ${nums1} is ${count1}`, () => {
  expect(countMaxOrSubsets(nums1)).toBe(count1);
});

const nums2 = [3,2,1,5];
const count2 = 6;
test(`Max OrSubsets count of ${nums2} is ${count2}`, () => {
  expect(countMaxOrSubsets(nums2)).toBe(count2);
});
