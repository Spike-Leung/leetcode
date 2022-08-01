const threeSumClosest = require("./code");

const arr = [-1,2,1,-4];
const target = 1;
const closetSum = 2;
test(`Three sum closet of ${arr} with target ${target} is ${closetSum}`, () => {
  expect(threeSumClosest(arr, target)).toBe(closetSum);
});

const arr1 = [0,0,0];
const target1 = 1;
const closetSum1 = 0;
test(`Three sum closet of ${arr1} with target ${target1} is ${closetSum1}`, () => {
  expect(threeSumClosest(arr1, target1)).toBe(closetSum1);
});

const arr2 = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
const target2 = 2;
const closetSum2 = 2;
test(`Three sum closet of ${arr2} with target ${target2} is ${closetSum2}`, () => {
  expect(threeSumClosest(arr2, target2)).toBe(closetSum2);
});
