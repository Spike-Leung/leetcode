const isPalindrome = require("./code");

const s = "A man, a plan, a canal: Panama";
test(`"${s}" is palindrome`, () => {
  expect(isPalindrome(s)).toBe(true);
});

const s1 = "race a car";
test(`"${s1}" is NOT palindrome`, () => {
  expect(isPalindrome(s1)).toBe(false);
});

const s2 = ".,";
test(`"${s2}" is palindrome`, () => {
  expect(isPalindrome(s2)).toBe(true);
});

const s3 = "0P";
test(`"${s3}" is NOT palindrome`, () => {
  expect(isPalindrome(s3)).toBe(false);
});
