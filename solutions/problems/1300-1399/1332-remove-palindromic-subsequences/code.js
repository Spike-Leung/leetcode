// https://leetcode-cn.com/problems/remove-palindromic-subsequences/
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  let length = s.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (s[i] !== s[length - 1 - i]) {
      return 2;
    }
  }

  return 1;
};

module.exports = removePalindromeSub;
