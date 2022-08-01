const nearestPalindromic = require("./code");

const n = "123";
const res = "121";
test(`Nearest Palindromic of ${n} is ${res} `, () => {
  expect(nearestPalindromic(n)).toBe(res);
});

const n1 = "1";
const res1 = "0";
test(`Nearest Palindromic of ${n1} is ${res1} `, () => {
  expect(nearestPalindromic(n1)).toBe(res1);
});

const n2 = "10";
const res2 = "9";
test(`Nearest Palindromic of ${n2} is ${res2} `, () => {
  expect(nearestPalindromic(n2)).toBe(res2);
});
