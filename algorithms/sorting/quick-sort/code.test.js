const quickSort = require("./code");
const quickSortInPlace = require("./quick-sort-in-place");
const quickSortInPlaceII = require("./quick-sort-in-place-ii");

const originArr = [5,3,2,7,1,3];
const sortedArr = [1,2,3,3,5,7];

test(`${originArr} should sort to ${sortedArr}`, () => {
  expect(quickSort(originArr).toString()).toBe(sortedArr.toString());
});

const originArr1 = [5,3,2,7,1,3];
test(`${originArr1} should sort to ${sortedArr}`, () => {
  expect(quickSortInPlace(originArr1).toString()).toBe(sortedArr.toString());
});

const originArr2 = [5,3,2,7,1,3];
test(`${originArr2} should sort to ${sortedArr}`, () => {
  expect(quickSortInPlaceII(originArr2).toString()).toBe(sortedArr.toString());
});
