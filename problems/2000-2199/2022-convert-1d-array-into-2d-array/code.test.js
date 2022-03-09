const construct2DArray = require("./code");

const original = [1,2,3,4];
const m = 2;
const n = 2;
const output = [[1,2],[3,4]];
test(`${original} convert to ${m} x ${n} should be ${output}`, () => {
  expect(construct2DArray(original, m, n)).toEqual(output);
});

const original1 = [1,2];
const m1 = 2;
const n1 = 2;
const output1 = [];
test(`${original1} convert to ${m1} x ${n1} should be ${output1}`, () => {
  expect(construct2DArray(original1, m1, n1)).toEqual(output1);
});

const original2 = [3];
const m2 = 1;
const n2 = 2;
const output2 = [];
test(`${original2} convert to ${m2} x ${n2} should be ${output2}`, () => {
  expect(construct2DArray(original2, m2, n2)).toEqual(output2);
});
