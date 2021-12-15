const singleNumbers = require("./code");

const single = [1,6];
const arr = [4,1,4,6];
test(`Single numbers of ${arr} are ${single}`, () => {
  const result = singleNumbers(arr);
  const isResultContainsAnswer = result.some((i) => single.includes(i));

  expect(isResultContainsAnswer).toBe(true);
});

const single1 = [2, 10];
const arr1 = [1,2,10,4,1,4,3,3];
test(`Single numbers of ${arr1} are ${single1}`, () => {
  const result = singleNumbers(arr1);
  const isResultContainsAnswer = result.some((i) => single1.includes(i));

  expect(isResultContainsAnswer).toBe(true);
});
