const containsNearbyDuplicate = require("./code");

const nums = [1,2,3,1];
const k = 3;
test(`${nums} contains nearby dulplicate in ${k}`, () => {
  expect(containsNearbyDuplicate(nums, k)).toBe(true);
});

const nums1 = [1,0,1,1];
const k1 = 1;
test(`${nums1} contains nearby dulplicate in ${k1}`, () => {
  expect(containsNearbyDuplicate(nums1, k1)).toBe(true);
});

const nums2 = [1,2,3,1,2,3];
const k2 = 2;
test(`${nums2} NOT contains nearby dulplicate in ${k2}`, () => {
  expect(containsNearbyDuplicate(nums2, k2)).toBe(false);
});

const nums3 = [1,2,3,4,5,6,7,8,9,10];
const k3 = 15;
test(`${nums3} NOT contains nearby dulplicate in ${k3}`, () => {
  expect(containsNearbyDuplicate(nums3, k3)).toBe(false);
});
