const permutation = require("./code");

const s = 'abc';
const output = ["abc","acb","bac","bca","cab","cba"];

test(`${s} 's output should be ${output}`, () => {
  expect(permutation(s)).toEqual(output);
});

const s1 = 'a';
const output1 = ["a"];

test(`${s1} 's output should be ${output1}`, () => {
  expect(permutation(s1)).toEqual(output1);
});

const s2 = '';
const output2 = [];

test(`${s2} 's output should be ${output2}`, () => {
  expect(permutation(s2)).toEqual(output2);
});

const s3 = 'aab';
const output3 = ['aab', 'aba', 'baa'];

test(`${s3} 's output should be ${output3}`, () => {
  expect(permutation(s3)).toEqual(output3);
});
