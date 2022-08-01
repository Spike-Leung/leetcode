const validUtf8 = require("./code");

const data = [197,130,1];
const valid = true;
test(`${data} is ${valid ? "valid" : "not valid"} utf8`, () => {
  expect(validUtf8(data)).toBe(valid);
});


const data1 = [235,140,4];
const valid1 = false;
test(`${data1} is ${valid1 ? "valid" : "not valid"} utf8`, () => {
  expect(validUtf8(data1)).toBe(valid1);
});

const data2 = [4];
const valid2 = true;
test(`${data2} is ${valid2 ? "valid" : "not valid"} utf8`, () => {
  expect(validUtf8(data2)).toBe(valid2);
});

const data3 = [4, 252];
const valid3 = false;
test(`${data3} is ${valid3 ? "valid" : "not valid"} utf8`, () => {
  expect(validUtf8(data3)).toBe(valid3);
});

// 下面两种情况容易忽略

// 一个单独的以 10 开头的数
const data4 = [145];
const valid4 = false;
test(`${data4} is ${valid4 ? "valid" : "not valid"} utf8`, () => {
  expect(validUtf8(data4)).toBe(valid4);
});

// 一个位数超过 4 字节的数 11111000
const data5 =[250,145,145,145,145];
const valid5 = false;
test(`${data5} is ${valid5 ? "valid" : "not valid"} utf8`, () => {
  expect(validUtf8(data5)).toBe(valid5);
});
