// https://leetcode-cn.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isChar(s[l])) {
      l++;
    }

    while (l < r && !isChar(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() === s[r].toLowerCase()) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
};

function isChar(c) {
  return c.match(/[0-9a-z]/i) !== null;
}
module.exports = isPalindrome;
