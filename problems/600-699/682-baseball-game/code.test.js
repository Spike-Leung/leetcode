const calPoints = require("./code");

const ops = ["5", "2", "C", "D", "+"];
const sum = 30;
test(`Sum of ${ops} should be ${sum}`, () => {
  expect(calPoints(ops)).toBe(sum);
});

const ops1 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
const sum1 = 27;
test(`Sum of ${ops1} should be ${sum1}`, () => {
  expect(calPoints(ops1)).toBe(sum1);
});

const ops2 = [
  "8373",
  "C",
  "9034",
  "-17523",
  "D",
  "1492",
  "7558",
  "-5022",
  "C",
  "C",
  "+",
  "+",
];
const sum2 = -107659;
test(`Sum of ${ops2} should be ${sum2}`, () => {
  expect(calPoints(ops2)).toBe(sum2);
});
