const getLeastNumbers = require("./code");

const arr = [3,2,1];
const k = 2;
const expected = [1, 2];
test(`${k} least numbers of ${arr} are ${expected}`, () => {
  expect(getLeastNumbers(arr, k)).toEqual(expect.arrayContaining(expected));
});

const arr1 = [0,2,1,1];
const k1 = 1;
const expected1 = [0];
test(`${k1} least numbers of ${arr1} are ${expected1}`, () => {
  expect(getLeastNumbers(arr1, k1)).toEqual(expect.arrayContaining(expected1));
});

const arr2 = [0,2,1,1];
const k2 = 6;
const expected2 = [0,2,1,1];
test(`${k2} least numbers of ${arr2} are ${expected2}`, () => {
  expect(getLeastNumbers(arr2, k2)).toEqual(expect.arrayContaining(expected2));
});
