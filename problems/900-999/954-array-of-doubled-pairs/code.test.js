const canReorderDoubled = require("./code");

const arr = [3, 1, 3, 6];
test(`${arr} can NOT recorder doubled`, () => {
  expect(canReorderDoubled(arr)).toBe(false);
});

const arr1 = [2, 1, 2, 6];
test(`${arr1} can NOT recorder doubled`, () => {
  expect(canReorderDoubled(arr1)).toBe(false);
});

const arr2 = [2, 4, -2, -4];
test(`${arr2} can recorder doubled`, () => {
  expect(canReorderDoubled(arr2)).toBe(true);
});
