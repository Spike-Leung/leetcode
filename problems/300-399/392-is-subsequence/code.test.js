const isSubsequence = require("./code");

const s = "abc";
const t = "ahbgdc";
test(`${s} is subsequence of ${t}`, () => {
  expect(isSubsequence(s, t)).toBe(true);
});

const s1 = "axc";
const t1 = "ahbgdc";
test(`${s1} is NOT subsequence of ${t1}`, () => {
  expect(isSubsequence(s1, t1)).toBe(false);
});

const s2 = "";
const t2 = "";
test(`${s2} is subsequence of ${t2}`, () => {
  expect(isSubsequence(s2, t2)).toBe(true);
});
