const lengthOfLongestSubstring = require("./code");

const str = "abcabcbb";
const maxLength = 3;
test(`Length of longest substring (${str}) is ${maxLength}`, () => {
  expect(lengthOfLongestSubstring(str)).toBe(maxLength);
});

const str1 = "bbbbbbbb";
const maxLength1 = 1;
test(`Length of longest substring (${str1}) is ${maxLength1}`, () => {
  expect(lengthOfLongestSubstring(str1)).toBe(maxLength1);
});

const str2 = "pwwkew";
const maxLength2 = 3;
test(`Length of longest substring (${str2}) is ${maxLength2}`, () => {
  expect(lengthOfLongestSubstring(str2)).toBe(maxLength2);
});
