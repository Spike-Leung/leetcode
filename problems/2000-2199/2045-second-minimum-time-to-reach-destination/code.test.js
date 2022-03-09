const secondMinimum = require("./code");

test(`Second Minimum is 13`, () => {
  const n = 5;
  const edges = [[1,2],[1,3],[1,4],[3,4],[4,5]];
  const time = 3;
  const change = 5;
  expect(secondMinimum(n, edges, time, change)).toBe(13);
});

test(`Second Minimum is 11`, () => {
  const n = 2;
  const edges = [[1,2]];
  const time = 3;
  const change = 2;
  expect(secondMinimum(n, edges, time, change)).toBe(11);
});
