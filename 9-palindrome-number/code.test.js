const isPalindrome = require("./code");

test("121 is palindrome", () => {
  expect(isPalindrome(121)).toBe(true);
});

test("-121 is not palindrome", () => {
  expect(isPalindrome(-121)).toBe(false);
});

test("10 is not palindrome", () => {
  expect(isPalindrome(10)).toBe(false);
});

test("-101 is not palindrome", () => {
  expect(isPalindrome(-101)).toBe(false);
});

test("9 is palindrome", () => {
  expect(isPalindrome(9)).toBe(true);
});
