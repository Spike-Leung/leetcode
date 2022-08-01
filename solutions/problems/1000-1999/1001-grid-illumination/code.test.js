const gridIllumination = require("./code");

const n = 5;
const lamps = [[0, 0], [4, 4]];
const queries = [[1, 1], [1, 0]];
const res = [1, 0];
test(`In ${n} x ${n} grid, with lamps: ${lamps}, queries: ${queries}, result should be ${res}`, () => {
  expect(gridIllumination(n, lamps, queries)).toEqual(res);
});

const n1 = 5;
const lamps1 = [[0, 0], [4, 4]];
const queries1 = [[1, 1], [1, 1]];
const res1 = [1, 1];
test(`In ${n1} x ${n1} grid, with lamps: ${lamps1}, queries: ${queries1}, result should be ${res1}`, () => {
  expect(gridIllumination(n1, lamps1, queries1)).toEqual(res1);
});

const n2 = 5;
const lamps2 = [[0, 0], [0, 4]];
const queries2 = [[0, 4], [0, 1], [1, 4]];
const res2 = [1, 1, 0];
test(`In ${n2} x ${n2} grid, with lamps: ${lamps2}, queries: ${queries2}, result should be ${res2}`, () => {
  expect(gridIllumination(n2, lamps2, queries2)).toEqual(res2);
});

const n3 = 5;
const lamps3 = [[0, 0], [1, 0]];
const queries3 = [[1, 1], [1, 1]];
const res3 = [1, 0];
test(`In ${n3} x ${n3} grid, with lamps: ${lamps3}, queries: ${queries3}, result should be ${res3}`, () => {
  expect(gridIllumination(n3, lamps3, queries3)).toEqual(res3);
});
