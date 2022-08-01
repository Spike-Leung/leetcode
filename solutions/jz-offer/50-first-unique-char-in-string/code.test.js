const firstUniqChar = require("./code");

const string = 'abaccdeff';
const firstUniqueChar = 'b';
test(`First unique char of ${string} is ${firstUniqueChar}`, () => {
  expect(firstUniqChar(string)).toBe(firstUniqueChar);
});

const string1 = '';
const firstUniqueChar1 = ' ';
test(`First unique char of ${string1} is ${firstUniqueChar1}`, () => {
  expect(firstUniqChar(string1)).toBe(firstUniqueChar1);
});

const string2 = 'abbccffa';
const firstUniqueChar2 = ' ';
test(`First unique char of ${string2} is ${firstUniqueChar2}`, () => {
  expect(firstUniqChar(string2)).toBe(firstUniqueChar2);
});
