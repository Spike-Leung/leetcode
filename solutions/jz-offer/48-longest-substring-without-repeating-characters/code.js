// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const dict = {};

  let maxLength = 0;
  let currLength = 0;

  for (let i = 0; i < s.length; i++) {
    const lastCharIndex = dict[s[i]];
    dict[s[i]] = i;

    if (lastCharIndex !== undefined && i - lastCharIndex <= currLength) {
      currLength = i - lastCharIndex;
    } else {
      currLength += 1;
    }

    maxLength = Math.max(currLength, maxLength);
  }

  return maxLength;
};

module.exports = lengthOfLongestSubstring;
