const grayCode = require("./code");

const n = 1;
const code = [0, 1];
test(`Gray code of ${n} is ${code}`, () => {
  expect(grayCode(n)).toEqual(code);
});

const n1 = 2;
const code1 = [0,1,3,2];
test(`Gray code of ${n1} is ${code1}`, () => {
  expect(grayCode(n1)).toEqual(code1);
});
