const increasingTriplet = require("./code");

const nums = [1,2,3,4,5];
test(`${nums} has increasing triplet`, () => {
  expect(increasingTriplet(nums)).toBe(true);
});

const nums1 = [5,4,3,2,1];
test(`${nums1} NOT has increasing triplet`, () => {
  expect(increasingTriplet(nums1)).toBe(false);
});

const nums2 =  [2,1,5,0,4,6];
test(`${nums2} has increasing triplet`, () => {
  expect(increasingTriplet(nums2)).toBe(true);
});
