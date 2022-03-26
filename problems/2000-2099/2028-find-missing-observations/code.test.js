const missingRolls = require("./code");

const rolls = [3,2,4,3];
const mean = 4;
const n = 2;
const res = [6,6];
test(`Rolls: ${rolls}, mean: ${mean}, n: ${n}, res should be ${res}`, () => {
  expect(missingRolls(rolls, mean, n)).toEqual(res);
});

const rolls1 = [1,2,3,4];
const mean1 = 6;
const n1 = 4;
const res1 = [];
test(`Rolls: ${rolls1}, mean: ${mean1}, n: ${n1}, res should be ${res1}`, () => {
  expect(missingRolls(rolls1, mean1, n1)).toEqual(res1);
});

const rolls2 = [1];
const mean2 = 3;
const n2 = 1;
const res2 = [5];
test(`Rolls: ${rolls2}, mean: ${mean2}, n: ${n2}, res should be ${res2}`, () => {
  expect(missingRolls(rolls2, mean2, n2)).toEqual(res2);
});

const rolls3 =[6,3,4,3,5,3];
const mean3 = 1;
const n3 = 6;
const res3 = [];
test(`Rolls: ${rolls3}, mean: ${mean3}, n: ${n3}, res should be ${res3}`, () => {
  expect(missingRolls(rolls3, mean3, n3)).toEqual(res3);
});
