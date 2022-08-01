const maxConsecutiveAnswers = require("./code");

const answerKey = "TTFF";
const k = 2;
const res = 4;
test(`Max consecutive answers of ${answerKey} with ${k} moves is ${res}`, () => {
  expect(maxConsecutiveAnswers(answerKey, k)).toBe(res);
});

const answerKey1 = "TFFT";
const k1 = 1;
const res1 = 3;
test(`Max consecutive answers of ${answerKey1} with ${k1} moves is ${res1}`, () => {
  expect(maxConsecutiveAnswers(answerKey1, k1)).toBe(res1);
});

const answerKey2 = "TTFTTFTT";
const k2 = 1;
const res2 = 5;
test(`Max consecutive answers of ${answerKey2} with ${k2} moves is ${res2}`, () => {
  expect(maxConsecutiveAnswers(answerKey2, k2)).toBe(res2);
});
