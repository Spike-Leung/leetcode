const search = require("./code");

const arr = [5, 7, 7, 8, 8, 10];
const count = 2;
const target = 8;
test(`There are ${count} [${target}] in ${arr}`, () => {
  expect(search(arr, target)).toBe(count);
});

const arr1 = [5, 7, 7, 8, 8, 10];
const count1 = 0;
const target1 = 6;
test(`There are ${count1} [${target1}] in ${arr1}`, () => {
  expect(search(arr1, target1)).toBe(count1);
});
