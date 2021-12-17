const twoSum = require("./code");

const arr = [2,7,11,15];
const target = 9;
const result = [2, 7];
test(`If sum is ${target}, ${result} in ${arr} can consist the target`, () => {
  const res = twoSum(arr, target);
  const isMatch = res.some((i) => result.includes(i));

  expect(isMatch).toBe(true);
});

const arr1 = [10,26,30,31,47,60];
const target1 = 40;
const result1 = [10, 30];
test(`If sum is ${target1}, ${result1} in ${arr1} can consist the target`, () => {
  const res = twoSum(arr, target);
  const isMatch = res.some((i) => result.includes(i));

  expect(isMatch).toBe(true);
});
