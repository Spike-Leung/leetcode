const longestSubstring = require("./code");

const s = "aaabb";
const k = 3;
const res = 3;
test(`Longest Substring length of ${s} with k = ${k} is ${res}`, () => {
  expect(longestSubstring(s, k)).toBe(res);
});

const s1 = "ababbc";
const k1 = 2;
const res1 = 5;
test(`Longest Substring length of ${s1} with k = ${k1} is ${res1}`, () => {
  expect(longestSubstring(s1, k1)).toBe(res1);
});

const s2 = "abc";
const k2 = 2;
const res2 = 0;
test(`Longest Substring length of ${s2} with k = ${k2} is ${res2}`, () => {
  expect(longestSubstring(s2, k2)).toBe(res2);
});

const s3 = "aaabcddddddfeeessskkk";
const k3 = 3;
const res3 = 9;
test(`Longest Substring length of ${s3} with k = ${k3} is ${res3}`, () => {
  expect(longestSubstring(s3, k3)).toBe(res3);
});
