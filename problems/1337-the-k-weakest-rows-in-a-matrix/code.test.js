const kWeakestRows = require("./code");

test(`
[
 [1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]
] 's 3 weekest rows is [2, 0, 3]`, () => {
  const output = kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  ).toString();
  expect(output).toBe([2, 0, 3].toString());
});

test(`
[
 [1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]
] 's 2 weekest rows is [0, 2]`, () => {
  const output = kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  ).toString();
  expect(output).toBe([0, 2].toString());
});
