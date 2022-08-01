const longestNiceSubstring = require("./code");

const s = "YazaAay";
const res = "aAa";
test(`Longest nice substring of ${s} is ${res}`, () => {
  expect(longestNiceSubstring(s)).toBe(res);
});

const s1 = "Bb";
const res1 = "Bb";
test(`Longest nice substring of ${s1} is ${res1}`, () => {
  expect(longestNiceSubstring(s1)).toBe(res1);
});

const s2 = "c";
const res2 = "";
test(`Longest nice substring of ${s2} is ${res2}`, () => {
  expect(longestNiceSubstring(s2)).toBe(res2);
});

const s3 = "dDzeE";
const res3 = "dD";
test(`Longest nice substring of ${s3} is ${res3}`, () => {
  expect(longestNiceSubstring(s3)).toBe(res3);
});
