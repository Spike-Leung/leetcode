const singleNumber = require("./code");

const single = 4;
const arr = [3,4,3,3];
test(`Single number of ${arr} is ${single}`, () => {
  expect(singleNumber(arr)).toBe(single);
});

const single1 = 1;
const arr1 = [9,1,7,9,7,9,7];
test(`Single numberf of ${arr1} is ${single1}`, () => {
  expect(singleNumber(arr1)).toBe(single1);
});
