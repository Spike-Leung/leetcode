/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek2 = function (day, month, year) {
  // In zeller's Formula, 0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday
  const weeks = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  // In Zeller's Formula, January and February are counted as months 13 and 14 of the previous year
  if (month < 3) {
    month += 12;
    year -= 1;
  }

  // K the year of the century (year mod 100)
  const K = year % 100;
  // J is the zero-based century
  const J = Math.floor(year / 100);
  const week =
    (day +
      Math.floor((13 * (month + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) +
      5 * J) %
    7;

  return weeks[week];
};

var dayOfTheWeek = function (day, month, year) {
  // 1970-12-31 是星期四
  const weeks = [
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
  ];
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let days = 0;

  let isSpecialYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  for (let i = 1971; i < year; i++) {
    if (isSpecialYear(i)) {
      days += 366;
    } else {
      days += 365;
    }
  }

  for (let i = 1; i < month; i++) {
    if (i === 2 && isSpecialYear(year)) {
      days += 29;
    } else {
      days += months[i - 1];
    }
  }

  days += day;

  return weeks[days % 7];
};

module.exports = dayOfTheWeek;
