const simplifiedFractions = require("./code");

const n = 8;
const res = ["1/2","1/3","1/4","1/5","1/6","1/7","1/8","2/3","2/5","2/7","3/4","3/5","3/7","3/8","4/5","4/7","5/6","5/7","5/8","6/7","7/8"];

test(`n = ${n}, res = ${res}`, () => {
  expect(simplifiedFractions(n)).toEqual(res);
});
