const generateParenthesis = require("./code");

const n = 3;
const output = ["((()))","(()())","(())()","()(())","()()()"];
test(`${n} parentheses can generate to ${output}`, () => {
  expect(generateParenthesis(n)).toEqual(output);
});

const n1 = 1;
const output1 = ["()"];
test(`${n1} parentheses can generate to ${output1}`, () => {
  expect(generateParenthesis(n1)).toEqual(output1);
});
