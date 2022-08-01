const maximumRequests = require("./code");

const n0 = 5;
const requests0 = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]];
const res0 = 5;
test(`n = ${n0}, request = ${requests0}, res should be ${res0}`, () => {
  expect(maximumRequests(n0, requests0)).toBe(res0);
});

const n1 = 4;
const requests1 = [[0,3],[3,1],[1,2],[2,0]];
const res1 = 4;
test(`n = ${n1}, request = ${requests1}, res should be ${res1}`, () => {
  expect(maximumRequests(n1, requests1)).toBe(res1);
});

const n2 = 3;
const requests2 = [[0,0],[1,2],[2,1]];
const res2 = 3;
test(`n = ${n2}, request = ${requests2}, res should be ${res2}`, () => {
  expect(maximumRequests(n2, requests2)).toBe(res2);
});

const n3 = 3;
const requests3 = [[1,2],[1,2],[2,2],[0,2],[2,1],[1,1],[1,2]];
const res3 = 4;
test(`n = ${n3}, request = ${requests3}, res should be ${res3}`, () => {
  expect(maximumRequests(n3, requests3)).toBe(res3);
});
