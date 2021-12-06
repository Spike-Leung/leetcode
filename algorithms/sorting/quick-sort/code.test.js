const quickSort = require("./code");
const quickSortInPlace = require("./quick-sort-in-place");

const originArr = [5,3,2,7,1,3];
const sortedArr = [1,2,3,3,5,7];

test(`${originArr} should sort to ${sortedArr}`, () => {
  expect(quickSort(originArr).toString()).toBe(sortedArr.toString());
});

test(`${originArr} should sort to ${sortedArr}`, () => {
  expect(quickSortInPlace(originArr).toString()).toBe(sortedArr.toString());
});
