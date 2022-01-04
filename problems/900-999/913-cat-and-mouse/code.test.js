const catMouseGame = require("./code");

const graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]];
const result = 0;
test(`In ${graph}, mouse win (result = ${result})`, () => {
  expect(catMouseGame(graph)).toBe(result);
});

const graph1 = [[1,3],[0],[3],[0,2]];
const result1 = 1;
test(`In ${graph1}, mouse win (result = ${result1})`, () => {
  expect(catMouseGame(graph1)).toBe(result1);
});
