const maxArea = require("./code");

const arr = [1,8,6,2,5,4,8,3,7];
const max = 49;
test(`Max area of ${arr} is ${max}`, () => {
  expect(maxArea(arr)).toBe(max);
});

const arr1 = [1, 1];
const max1 = 1;
test(`Max area of ${arr1} is ${max1}`, () => {
  expect(maxArea(arr1)).toBe(max1);
});

const arr2 = [4,3,2,1,4];
const max2 = 16;
test(`Max area of ${arr2} is ${max2}`, () => {
  expect(maxArea(arr2)).toBe(max2);
});

const arr3 = [1,2,1];
const max3 = 2;
test(`Max area of ${arr3} is ${max3}`, () => {
  expect(maxArea(arr3)).toBe(max3);
});
