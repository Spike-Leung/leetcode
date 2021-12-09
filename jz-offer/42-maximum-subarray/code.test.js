const maxSubArray = require("./code");

const arr = [-2,1,-3,4,-1,2,1,-5,4];
const maximunSum = 6;
test(`maximun subarray sum of ${arr} is ${maximunSum}`, () => {
  expect(maxSubArray(arr)).toBe(maximunSum);
});

const arr1 = [-2];
const maximunSum1 = -2;
test(`maximun subarray sum of ${arr1} is ${maximunSum1}`, () => {
  expect(maxSubArray(arr1)).toBe(maximunSum1);
});
