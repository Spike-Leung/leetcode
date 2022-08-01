const numberOfWeakCharacters = require("./code");

const properties = [[5,5],[6,3],[3,6]];
const count = 0;
test(`There are ${count} week characters in ${properties}`, () => {
  expect(numberOfWeakCharacters(properties)).toBe(count);
});

const properties1 = [[2,2],[3,3]];
const count1 = 1;
test(`There are ${count1} week characters in ${properties1}`, () => {
  expect(numberOfWeakCharacters(properties1)).toBe(count1);
});

const properties2 = [[1,5], [10, 4], [4, 3]];
const count2 = 1;
test(`There are ${count2} week characters in ${properties2}`, () => {
  expect(numberOfWeakCharacters(properties2)).toBe(count2);
});
