/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
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

  console.log(week);
  return weeks[week];
};

module.exports = dayOfTheWeek;
