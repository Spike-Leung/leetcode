const merge = require("./code");

const d1 = [214, 12, 120, 110, 12, 155, 164, 143,51, 55, 110, 550];
const d2 = [110, 11, 12, 120, 13, 14, 550, 144, 143, 114, 51, 55];
const result = [ [ 11, 12 ], [ 13, 51 ], [ 55, 110 ], [ 120, 143 ], [ 155, 550 ] ];
test(`${d1} and ${d1} merge to ${result}`, () => {
  expect(merge(d1, d2)).toEqual(result);
});
