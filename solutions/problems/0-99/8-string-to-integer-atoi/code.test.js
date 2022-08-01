const myAtoi = require("./code");

const input = "42";
const output = 42;
test(`${input} should transfer to ${output}`, () => {
  expect(myAtoi(input)).toBe(output);
});

const input1 = "   -42";
const output1 = -42;
test(`${input1} should transfer to ${output1}`, () => {
  expect(myAtoi(input1)).toBe(output1);
});

const input2 = "4193 with words";
const output2 = 4193;
test(`${input2} should transfer to ${output2}`, () => {
  expect(myAtoi(input2)).toBe(output2);
});

const input3 = "words and 987";
const output3 = 0;
test(`${input3} should transfer to ${output3}`, () => {
  expect(myAtoi(input3)).toBe(output3);
});

const input4 = "-91283472332";
const output4 = -2147483648;
test(`${input4} should transfer to ${output4}`, () => {
  expect(myAtoi(input4)).toBe(output4);
});

const input5 = "-";
const output5 = 0;
test(`${input5} should transfer to ${output5}`, () => {
  expect(myAtoi(input5)).toBe(output5);
});
