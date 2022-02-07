const longestDiverseString = require("./code");

const a = 1;
const b = 1;
const c = 7;
const res = ['ccaccbcc', 'ccaccbcc'];
test(`a: ${a}, b: ${b}, c: ${c}, longest diverse string should be ${res.join(" or ")}`, () => {
  const expected = res.includes(longestDiverseString(a, b, c));
  expect(expected).toBe(true);
});

const a1 = 2;
const b1 = 2;
const c1 = 1;
const res1 = ['aabbc', 'bbaac', 'caabb', 'cbbaa', 'aacbb', 'bbcaa', "abbac"];
test(`a: ${a1}, b: ${b1}, c: ${c1}, longest diverse string should be ${res1.join(" or ")}`, () => {
  const expected = res1.includes(longestDiverseString(a1, b1, c1));
  expect(expected).toBe(true);
});

const a2 = 7;
const b2 = 1;
const c2 = 0;
const res2 = ["aabaa"];
test(`a: ${a2}, b: ${b2}, c: ${c2}, longest diverse string should be ${res2.join(" or ")}`, () => {
  const expected = res2.includes(longestDiverseString(a2, b2, c2));
  expect(expected).toBe(true);
});

const a3 = 7;
const b3 = 0;
const c3 = 0;
const res3 = ["aa"];
test(`a: ${a3}, b: ${b3}, c: ${c3}, longest diverse string should be ${res3.join(" or ")}`, () => {
  const expected = res3.includes(longestDiverseString(a3, b3, c3));
  expect(expected).toBe(true);
});
