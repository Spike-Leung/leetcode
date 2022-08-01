const myPow = require("./code");

test(`x = 2.00000 n = 10, pow = 1024.00000`, () => {
  expect(myPow(2.00000, 10)).toBe(1024.00000);
});

test(`x = 2.00000 n = -2, pow = 0.25`, () => {
  expect(myPow(2.00000, -2)).toBe(0.25);
});

test(`x = 2.00000 n = 0, pow = 1`, () => {
  expect(myPow(2.00000, 0)).toBe(1);
});

test(`x = 0 n = 0, pow = 1`, () => {
  expect(myPow(0, 0)).toBe(1);
});

test(`x = 0 n = -1, pow = Infinity`, () => {
  expect(myPow(0, -1)).toBe(Infinity);
});

test(`x = -7 n = -1, pow = ${Math.pow(-7, -1)}`, () => {
  expect(myPow(-7, -1)).toBe(Math.pow(-7, -1));
});

test(`x = 2.00000 n = -2147483648, pow = ${Math.pow(2.00000, -2147483648)}`, () => {
  expect(myPow(2.00000, -2147483648)).toBe(Math.pow(2.00000, -2147483648));
});

test(`x = 34.00515 n = -3 pow = ${Math.pow(34.00515, -3)}`, () => {
  expect(myPow(34.00515, -3)).toBe(Math.pow(34.00515, -3));
})
