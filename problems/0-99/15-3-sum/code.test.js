const threeSum = require("./code");

const arr = [-1,0,1,2,-1,-4];
const result = [[-1,-1,2],[-1,0,1]];
test(`Three sum equal to 0 of ${arr} are ${result}`, () => {
  expect(threeSum(arr)).toEqual(result);
});

const arr1 = [];
const result1 = [];
test(`Three sum equal to 0 of ${arr1} are ${result1}`, () => {
  expect(threeSum(arr1)).toEqual(result1);
});

const arr2 = [0];
const result2 = [];
test(`Three sum equal to 0 of ${arr2} are ${result2}`, () => {
  expect(threeSum(arr2)).toEqual(result2);
});

const arr3 = [0,1,2,3,4,5];
const result3 = [];
test(`Three sum equal to 0 of ${arr3} are ${result3}`, () => {
  expect(threeSum(arr3)).toEqual(result3);
});

const arr4 = [0,0,0,0,0,0,0];
const result4 = [[0,0,0]];
test(`Three sum equal to 0 of ${arr4} are ${result4}`, () => {
  expect(threeSum(arr4)).toEqual(result4);
});

const arr5 = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
const result5 = [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]];
test(`Three sum equal to 0 of ${arr5} are ${result5}`, () => {
  expect(threeSum(arr5)).toEqual(result5);
});
