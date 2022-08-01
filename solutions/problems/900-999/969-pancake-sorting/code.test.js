const pancakeSort = require("./code");

const arr = [3, 2, 4, 1];
const res = [3, 4, 2, 3, 1, 2];
test(`arr: ${arr}, should pancakesort with ${res}`, () => {
  expect(pancakeSort(arr)).toEqual(res);
});
