const findContinuousSequence = require("./code");

const target = 9;
const result = [[2,3,4],[4,5]];
test(`Continuous Sequences of ${target} are ${result}`, () => {
  expect(findContinuousSequence(target)).toEqual(result);
});

const target1 = 15;
const result1 = [[1,2,3,4,5], [4,5,6], [7,8]];
test(`Continuous Sequences of ${target1} are ${result1}`, () => {
  expect(findContinuousSequence(target1)).toEqual(result1);
});
