/**
 * 9.palindrome-number
 *
 * https://leetcode-cn.com/problems/palindrome-number/submissions/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const xStr = x.toString();
  const reverseX = xStr.split("").reverse().join("");

  return xStr === reverseX;
};

module.exports = isPalindrome;
