const reverseWords = require("./code");

const str = "the sky is blue";
const reverseStr = "blue is sky the";
test(`Reverse strinig of ${str} is ${reverseStr}`, () => {
  expect(reverseWords(str)).toBe(reverseStr);
});

const str1 = "  hello world!  ";
const reverseStr1 = "world! hello";
test(`Reverse strinig of ${str1} is ${reverseStr1}`, () => {
  expect(reverseWords(str1)).toBe(reverseStr1);
});

const str2 = "a good   example";
const reverseStr2 = "example good a";
test(`Reverse strinig of ${str2} is ${reverseStr2}`, () => {
  expect(reverseWords(str2)).toBe(reverseStr2);
});

const str3 = "  Bob    Loves  Alice   ";
const reverseStr3 = "Alice Loves Bob";
test(`Reverse strinig of ${str3} is ${reverseStr3}`, () => {
  expect(reverseWords(str3)).toBe(reverseStr3);
});
