const lengthOfLongestSubstring = require("./code");

const str = "abcabcbb";
const length = 3;
test(`Length of longest substring '${str}' is ${length}`, () => {
  expect(lengthOfLongestSubstring(str)).toBe(length);
});

const str1 = "bbbbb";
const length1 = 1;
test(`Length of longest substring '${str1}' is ${length1}`, () => {
  expect(lengthOfLongestSubstring(str1)).toBe(length1);
});

const str2 = "pwwkew";
const length2 = 3;
test(`Length of longest substring '${str2}' is ${length2}`, () => {
  expect(lengthOfLongestSubstring(str2)).toBe(length2);
});

const str3 = "";
const length3 = 0;
test(`Length of longest substring '${str3}' is ${length3}`, () => {
  expect(lengthOfLongestSubstring(str3)).toBe(length3);
});

const str4 = " ";
const length4 = 1;
test(`Length of longest substring '${str4}' is ${length4}`, () => {
  expect(lengthOfLongestSubstring(str4)).toBe(length4);
});

const str5 = " a b";
const length5 = 3;
test(`Length of longest substring '${str5}' is ${length5}`, () => {
  expect(lengthOfLongestSubstring(str5)).toBe(length5);
});
