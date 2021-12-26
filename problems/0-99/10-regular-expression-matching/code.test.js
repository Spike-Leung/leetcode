const isMatch = require("./code");

const p = "a";
const s = "aa";
test(`${p} not match ${s}`, () => {
  expect(isMatch(s, p)).toBe(false);
});

const p1 = "a*";
const s1 = "aa";
test(`${p1} match ${s1}`, () => {
  expect(isMatch(s1, p1)).toBe(true);
});

const p2 = ".*";
const s2 = "ab";
test(`${p2} match ${s2}`, () => {
  expect(isMatch(s2, p2)).toBe(true);
});

const p3 = "c*a*b";
const s3 = "aab";
test(`${p3} match ${s3}`, () => {
  expect(isMatch(s3, p3)).toBe(true);
});

const p4 = "mis*is*p*.";
const s4 = "mississippi";
test(`${p4} not match ${s4}`, () => {
  expect(isMatch(s4, p4)).toBe(false);
});

const p5 = "mis*is*ip*.";
const s5 = "mississippi";
test(`${p5} match ${s5}`, () => {
  expect(isMatch(s5, p5)).toBe(true);
});

const p6 = "a*a";
const s6 = "aaa";
test(`${p6} match ${s6}`, () => {
  expect(isMatch(s6, p6)).toBe(true);
});

const p7 = ".*c";
const s7 = "ab";
test(`${p7} not match ${s7}`, () => {
  expect(isMatch(s7, p7)).toBe(false);
});

const p8 = "ab*a*c*a";
const s8 = "aaa";
test(`${p8} match ${s8}`, () => {
  expect(isMatch(s8, p8)).toBe(true);
});

const p9 = ".*..";
const s9 = "ab";
test(`${p9} match ${s9}`, () => {
  expect(isMatch(s9, p9)).toBe(true);
});

const p10 = "ab..";
const s10 = "ab";
test(`${p10} not match ${s10}`, () => {
  expect(isMatch(s10, p10)).toBe(false);
});

const p11 = ".*a*a";
const s11 = "bbbba";
test(`${p11} match ${s11}`, () => {
  expect(isMatch(s11, p11)).toBe(true);
});

const p12 = ".*....";
const s12 = "ab";
test(`${p12} not match ${s12}`, () => {
  expect(isMatch(s12, p12)).toBe(false);
});

const p13 = ".*.*.*";
const s13 = "ab";
test(`${p13} match ${s13}`, () => {
  expect(isMatch(s13, p13)).toBe(true);
});

const p14 = ".*...*.*";
const s14 = "ab";
test(`${p14} match ${s14}`, () => {
  expect(isMatch(s14, p14)).toBe(true);
});

const p15 = ".*..*..*";
const s15 = "ab";
test(`${p15} match ${s15}`, () => {
  expect(isMatch(s15, p15)).toBe(true);
});

const p16 = ".*..*..*.";
const s16 = "ab";
test(`${p16} match ${s16}`, () => {
  expect(isMatch(s16, p16)).toBe(false);
});

const p17 = "aasdf.*asdf.*asdf.*asdf.*s";
const s17 = "aasdfasdfasdfasdfas";
test(`${p17} match ${s17}`, () => {
  expect(isMatch(s17, p17)).toBe(true);
});
