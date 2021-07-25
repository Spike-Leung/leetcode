/**
 * 9.palindrome-number
 *
 * https://leetcode-cn.com/problems/palindrome-number/submissions/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  if (x === 0) {
    return true;
  }

  let divisionNum = x;
  let sum = 0;
  let exponent = Math.floor(Math.log10(divisionNum));

  while (exponent >= 0) {
    sum += (divisionNum % 10) * Math.pow(10, exponent);
    divisionNum = Number.parseInt(divisionNum / 10, 10);
    exponent--;
  }

  return sum === x;
};

module.exports = isPalindrome;
