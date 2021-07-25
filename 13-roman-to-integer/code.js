/**
 * 13. Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let index = 0;
  let sLength = s.length;
  const romanUnitArr = [];

  while (index < s.length) {
    const currRoman = s[index];
    const nextRoman = s[index + 1];

    if (romanMap[`${currRoman}${nextRoman}`]) {
      romanUnitArr.push(`${currRoman}${nextRoman}`);
      index += 2;
    } else {
      romanUnitArr.push(currRoman);
      index++;
    }
  }

  return romanUnitArr.reduce((acc, curr) => (acc += romanMap[curr]), 0);
};

module.exports = romanToInt;
