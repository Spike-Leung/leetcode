const countVowelPermutation = require("./code");

const n = 1;
const count = 5;
test(`There are ${count} string with ${n} vowels`, () => {
  expect(countVowelPermutation(n)).toBe(count);
});

const n1 = 2;
const count1 = 10;
test(`There are ${count1} string with ${n1} vowels`, () => {
  expect(countVowelPermutation(n1)).toBe(count1);
});

const n2 = 5;
const count2 = 68;
test(`There are ${count2} string with ${n2} vowels`, () => {
  expect(countVowelPermutation(n2)).toBe(count2);
});

const n3 = 144;
const count3 = 18208803;
test(`There are ${count3} string with ${n3} vowels`, () => {
  expect(countVowelPermutation(n3)).toBe(count3);
});
