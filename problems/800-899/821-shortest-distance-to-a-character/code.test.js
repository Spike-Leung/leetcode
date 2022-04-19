const shortestToChar = require("./code");

const s = "loveleetcode";
const c = "e";
const res = [3,2,1,0,1,0,0,1,2,2,1,0];
test(`String: ${s}, char: ${c}, output: ${res}`, () => {
  expect(shortestToChar(s, c)).toEqual(res);
});

const s1 = "aaab";
const c1 = "b";
const res1 = [3,2,1,0];
test(`String: ${s1}, char: ${c1}, output: ${res1}`, () => {
  expect(shortestToChar(s1, c1)).toEqual(res1);
});
