const platesBetweenCandles = require("./code");

const s1 = "**|**|***|", queries1 = [[2,5],[5,9]], res1 = [2,3];
test(`s: ${s1}, queries: ${queries1}, res: ${res1}`, () => {
  expect(platesBetweenCandles(s1, queries1)).toEqual(res1);
});

const s2 = "***|**|*****|**||**|*", queries2 = [[1,17],[4,5],[14,17],[5,11],[15,16]]; res2 = [9,0,0,0,0];
test(`s: ${s2}, queries: ${queries2}, res: ${res2}`, () => {
  expect(platesBetweenCandles(s2, queries2)).toEqual(res2);
});
