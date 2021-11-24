const validateStackSequences = require("./code");

const push = [1,2,3,4,5];
const pop = [4,5,3,2,1];
test(`${pop} of ${push} is valid`, () => {
  expect(validateStackSequences(push, pop)).toBe(true);
});

const push1 = [1,2,3,4,5];
const pop1 = [4,3,5,1,2];
test(`${pop1} of ${push1} is not valid`, () => {
  expect(validateStackSequences(push1, pop1)).toBe(false);
});

const push2 = [1,0];
const pop2 = [1,0];
test(`${pop2} of ${push2} is valid`, () => {
  expect(validateStackSequences(push2, pop2)).toBe(true);
});

const push3 = [1,0,2];
const pop3 = [2,1,0];
test(`${pop3} of ${push3} is valid`, () => {
  expect(validateStackSequences(push3, pop3)).toBe(false);
});
