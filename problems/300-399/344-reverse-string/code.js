/**
 * 344. Reverse String
 *
 * https://leetcode-cn.com/problems/reverse-string/
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const length = s.length;
  let left = 0;
  let right = length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

module.exports = reverseString;
