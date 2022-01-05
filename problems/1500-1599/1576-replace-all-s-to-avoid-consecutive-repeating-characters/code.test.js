const modifyString = require("./code");

const s = "?zs";
const output = "azs";
test(`${s} is modified to ${output}`, () => {
  expect(modifyString(s)).toBe(output);
});

const s1 = "ubv?w";
const output1 = "ubvaw";
test(`${s1} is modified to ${output1}`, () => {
  expect(modifyString(s1)).toBe(output1);
});

const s2 = "j?qg??b";
const output2 = "jaqgacb";
test(`${s2} is modified to ${output2}`, () => {
  expect(modifyString(s2)).toBe(output2);
});

const s3 = "??yw?ipkj?";
const output3 = "abywaipkja";
test(`${s3} is modified to ${output3}`, () => {
  expect(modifyString(s3)).toBe(output3);
});

const s4 = "?????";
const output4 = "ababa";
test(`${s4} is modified to ${output4}`, () => {
  expect(modifyString(s4)).toBe(output4);
});
