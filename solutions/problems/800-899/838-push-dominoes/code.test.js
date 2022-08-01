const pushDominoes = require("./code");

const dominoes = "RR.L";
const res = "RR.L";
test(`Result of ${dominoes} is ${res}`, () => {
  expect(pushDominoes(dominoes)).toBe(res);
});

const dominoes1 = ".L.R...LR..L..";
const res1 = "LL.RR.LLRRLL..";
test(`Result of ${dominoes1} is ${res1}`, () => {
  expect(pushDominoes(dominoes1)).toBe(res1);
});
