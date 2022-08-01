const dayOfTheWeek = require("./code");

const day = 31;
const month = 8;
const year = 2019;
const week = "Saturday";
test(`${year}-${month}-${day} is ${week}`, () => {
  expect(dayOfTheWeek(day, month, year)).toBe(week);
});

const day1 = 18;
const month1 = 7;
const year1 = 1999;
const week1 = "Sunday";
test(`${year1}-${month1}-${day1} is ${week1}`, () => {
  expect(dayOfTheWeek(day1, month1, year1)).toBe(week1);
});

const day2 = 15;
const month2 = 8;
const year2 = 1993;
const week2 = "Sunday";
test(`${year2}-${month2}-${day2} is ${week2}`, () => {
  expect(dayOfTheWeek(day2, month2, year2)).toBe(week2);
});

const day3 = 7;
const month3 = 3;
const year3 = 2003;
const week3 = "Friday";
test(`${year3}-${month3}-${day3} is ${week3}`, () => {
  expect(dayOfTheWeek(day3, month3, year3)).toBe(week3);
});
