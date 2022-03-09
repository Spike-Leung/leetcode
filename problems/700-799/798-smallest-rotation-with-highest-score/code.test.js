const bestRotation = require("./code");

const nums = [2,3,1,4,0];
const res = 3;
test(`Best rotation of ${nums} is ${res}`, () => {
  expect(bestRotation(nums)).toBe(res);
});

const nums1 = [1,3,0,2,4];
const res1 = 0;
test(`Best rotation of ${nums1} is ${res1}`, () => {
  expect(bestRotation(nums1)).toBe(res1);
});
