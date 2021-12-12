const maxValue = require("./code");

const matrix = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
];
const maximum = 12;
test(`maximun of ${matrix} is ${maximum}`, () => {
  expect(maxValue(matrix)).toBe(maximum);
});
