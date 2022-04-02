const reverseVowels = require("./code");

const s = "hello";
const res = "holle";
test(`${s} after reverse vowels should be ${res}`, () => {
  expect(reverseVowels(s)).toBe(res);
});

const s1 = "leetcode";
const res1 = "leotcede";
test(`${s1} after reverse vowels should be ${res1}`, () => {
  expect(reverseVowels(s1)).toBe(res1);
});
