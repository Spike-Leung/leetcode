const countHighestScoreNodes = require("./code");

const parents = [-1,2,0,2,0];
const count = 3;
test(`Count of highest score nodes of  parents: ${parents} is ${count}`, () => {
  expect(countHighestScoreNodes(parents)).toBe(count);
});

const parents1 = [-1,2,0];
const count1 = 2;
test(`Count of highest score nodes of  parents: ${parents1} is ${count1}`, () => {
  expect(countHighestScoreNodes(parents1)).toBe(count1);
});
