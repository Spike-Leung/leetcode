const strStr = require("./code");

const haystack = "hello";
const needle = "ll";
const index = 2;
test(`First occur index of '${needle}' in '${haystack}' is ${index}`, () => {
  expect(strStr(haystack, needle)).toBe(index);
});

const haystack1 = "aaaaa";
const needle1 = "bba";
const index1 = -1;
test(`First occur index of '${needle1}' in '${haystack1}' is ${index1}`, () => {
  expect(strStr(haystack1, needle1)).toBe(index1);
});

const haystack2 = "";
const needle2 = "";
const index2 = 0;
test(`First occur index of '${needle2}' in '${haystack2}' is ${index2}`, () => {
  expect(strStr(haystack2, needle2)).toBe(index2);
});

const haystack3 = "aaa";
const needle3 = "aaaa";
const index3 = -1;
test(`First occur index of '${needle3}' in '${haystack3}' is ${index3}`, () => {
  expect(strStr(haystack3, needle3)).toBe(index3);
});
