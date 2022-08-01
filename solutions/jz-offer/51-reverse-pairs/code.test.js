const reversePairs = require("./code");

const arr = [7,5,6,4];
const count = 5;
test(`There are ${count} reverse pairs in ${arr}`, () => {
  expect(reversePairs(arr)).toBe(count);
});

const arr1 = [5,6];
const count1 = 0;
test(`There are ${count1} reverse pairs in ${arr1}`, () => {
  expect(reversePairs(arr1)).toBe(count1);
});

const arr2 = [6,1,2,3];
const count2 = 3;
test(`There are ${count2} reverse pairs in ${arr2}`, () => {
  expect(reversePairs(arr2)).toBe(count2);
});

const arr3 = [5,4,3,2,1];
const count3 = 10;
test(`There are ${count3} reverse pairs in ${arr3}`, () => {
  expect(reversePairs(arr3)).toBe(count3);
});
