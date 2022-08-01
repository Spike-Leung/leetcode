const reverseStr = require("./code");

const s = "abcdefg";
const k = 2;
const res = "bacdfeg";
test(`s: ${s}, k: ${k}, after reverse should be ${res}`, () => {
  expect(reverseStr(s, k)).toBe(res);
});

const s1 = "abcd";
const k1 = 2;
const res1 = "bacd";
test(`s: ${s1}, k: ${k1}, after reverse should be ${res1}`, () => {
  expect(reverseStr(s1, k1)).toBe(res1);
});

const s2 = "abcdcd";
const k2 = 2;
const res2 = "bacddc";
test(`s: ${s2}, k: ${k2}, after reverse should be ${res2}`, () => {
  expect(reverseStr(s2, k2)).toBe(res2);
});


const s3 = "krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc";
const k3 = 20;
const res3 = "jlnnxsetgcpsbhsfymrkhfursyissjnsocgdhgfxtxrlvugsaphqzxllwebukgatzfybprfmmfithphccxfsogsgqsnvckjvnskk";
test(`s: ${s3}, k: ${k3}, after reverse should be ${res3}`, () => {
  expect(reverseStr(s3, k3)).toBe(res3);
});
