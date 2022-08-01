const selfDividingNumbers = require("./code");

const left = 1;
const right = 22;
const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
test(`Self dividing numbers between ${left} and ${right} is ${res}`, () => {
  expect(selfDividingNumbers(left, right)).toEqual(res);
});

const left1 = 47;
const right1 = 85;
const res1 = [48,55,66,77];
test(`Self dividing numbers between ${left1} and ${right1} is ${res1}`, () => {
  expect(selfDividingNumbers(left1, right1)).toEqual(res1);
});
