const longestPalindrome = require("./code");

const str = "babad";
const subStr = "bab";
test(`Longest palindrome substring of ${str} is ${subStr}`, () => {
  const expected = ['bab', 'aba'].includes(longestPalindrome(str));
  expect(expected).toBe(true);
});

const str1 = "cbbd";
const subStr1 = "bb";
test(`Longest palindrome substring of ${str1} is ${subStr1}`, () => {
  expect(longestPalindrome(str1)).toBe(subStr1);
});

const str2 = "a";
const subStr2 = "a";
test(`Longest palindrome substring of ${str2} is ${subStr2}`, () => {
  expect(longestPalindrome(str2)).toBe(subStr2);
});

const str3 = "ac";
const subStr3 = "a";
test(`Longest palindrome substring of ${str3} is ${subStr3}`, () => {
  expect(longestPalindrome(str3)).toBe(subStr3);
});

const str4 = "acca";
const subStr4 = "acca";
test(`Longest palindrome substring of ${str4} is ${subStr4}`, () => {
  expect(longestPalindrome(str4)).toBe(subStr4);
});

const str5 = "abcba";
const subStr5 = "abcba";
test(`Longest palindrome substring of ${str5} is ${subStr5}`, () => {
  expect(longestPalindrome(str5)).toBe(subStr5);
});
