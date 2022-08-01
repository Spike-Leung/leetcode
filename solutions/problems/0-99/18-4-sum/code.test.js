const fourSum = require("./code");

const nums = [1,0,-1,0,-2,2];
const target = 0;
const output = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]];
test(`Four sum equal to ${target} in ${nums} are ${target}`, () => {
  expect(fourSum(nums, target)).toEqual(output);
});

const nums1 = [2,2,2,2,2];
const target1 = 8;
const output1 = [[2,2,2,2]];
test(`Four sum equal to ${target1} in ${nums1} are ${target1}`, () => {
  expect(fourSum(nums1, target1)).toEqual(output1);
});

const nums2 = [-3,-1,0,2,4,5];
const target2 = 0;
const output2 = [[-3,-1,0,4]];
test(`Four sum equal to ${target2} in ${nums2} are ${target2}`, () => {
  expect(fourSum(nums2, target2)).toEqual(output2);
});

const nums3 = [-3,-1,0,2,4,5];
const target3 = 2;
const output3 = [[-3,-1,2,4]];
test(`Four sum equal to ${target3} in ${nums3} are ${target3}`, () => {
  expect(fourSum(nums3, target3)).toEqual(output3);
});

const nums4 = [-3,-2,-1,0,0,1,2,3];
const target4 = 0;
const output4 = [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]];
test(`Four sum equal to ${target4} in ${nums4} are ${target4}`, () => {
  expect(fourSum(nums4, target4)).toEqual(output4);
});
