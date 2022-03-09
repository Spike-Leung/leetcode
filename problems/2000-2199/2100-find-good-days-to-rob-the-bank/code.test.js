const goodDaysToRobBank = require("./code");

const security = [5,3,3,3,5,6,2];
const time = 2;
const goodDays = [2,3];
test(`${goodDays} are good days to rob bank with security: ${security} and time ${time}`, () => {
  expect(goodDaysToRobBank(security, time)).toEqual(goodDays);
});

const security1 = [1,1,1,1,1];
const time1 = 0;
const goodDays1 = [0,1,2,3,4];
test(`${goodDays1} are good days to rob bank with security: ${security1} and time ${time1}`, () => {
  expect(goodDaysToRobBank(security1, time1)).toEqual(goodDays1);
});

const security2 = [1,2,3,4,5,6];
const time2 = 2;
const goodDays2 = [];
test(`${goodDays2} are good days to rob bank with security: ${security2} and time ${time2}`, () => {
  expect(goodDaysToRobBank(security2, time2)).toEqual(goodDays2);
});

const security3 = [3,0,0,0,1];
const time3 = 2;
const goodDays3 = [2];
test(`${goodDays3} are good days to rob bank with security: ${security3} and time ${time3}`, () => {
  expect(goodDaysToRobBank(security3, time3)).toEqual(goodDays3);
});
