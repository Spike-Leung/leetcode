const removePalindromeSub = require("./code");

const s = "ababa";
const count = 1;
test(`Min Count remove palindrome sub of ${s} is ${count}`, () => {
  expect(removePalindromeSub(s)).toBe(count);
});

const s1 = "abb";
const count1 = 2;
test(`Min Count remove palindrome sub of ${s1} is ${count1}`, () => {
  expect(removePalindromeSub(s1)).toBe(count1);
});

const s2 = "baabb";
const count2 = 2;
test(`Min Count remove palindrome sub of ${s2} is ${count2}`, () => {
  expect(removePalindromeSub(s2)).toBe(count2);
});
