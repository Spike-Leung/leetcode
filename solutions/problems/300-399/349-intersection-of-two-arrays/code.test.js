const intersection = require("./code");

const num1 = [1,2,2,1];
const num2 = [2,2];
const res = [2];
test(`Intersection of ${num1} and ${num2} is ${res}`, () => {
  expect(intersection(num1, num2)).toEqual(res);
});

const num11 = [4,9,5];
const num21 = [9,4,9,8,4];
const res1 = [9,4];
test(`Intersection of ${num11} and ${num21} is ${res1}`, () => {
  const expected = intersection(num11, num21).every((n) => [9,4].includes(n));
  expect(expected).toBe(true);
});
