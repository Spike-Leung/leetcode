const convert = require("./code");

const s = "PAYPALISHIRING";
const row = 3;
const output = "PAHNAPLSIIGYIR";
test(`${s} with ${row} rows convert to ${output}`, () => {
  expect(convert(s, row)).toBe(output);
});

const s1 = "PAYPALISHIRING";
const row1 = 4;
const output1 = "PINALSIGYAHRPI";
test(`${s1} with ${row1} rows convert to ${output1}`, () => {
  expect(convert(s1, row1)).toBe(output1);
});

const s2 = "A";
const row2 = 1;
const output2 = "A";
test(`${s2} with ${row2} rows convert to ${output2}`, () => {
  expect(convert(s2, row2)).toBe(output2);
});
