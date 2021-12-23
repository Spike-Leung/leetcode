// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }

  // 哈希表存储字符的下标
  let record = {};
  let left = 0;
  let right = 0;
  let length = 0;

  while (right < s.length) {
    const char = s[right];

    // 如果出现重复，并且重复字符的下标在 left 和 right 之间，则计算不重复子串的长度
    // 同时 left 从重复字符下标右移一位，排除掉重复的字符
    if (record[char] !== undefined && record[char] >= left) {
      length = Math.max(right - left, length);
      left = record[char] + 1;
    } else if (right === s.length - 1) {
      // 遍历完字符串也没重复，则用字符长度减去 left 获取字串长度
      length = Math.max(s.length - left, length);
    }

    record[char] = right;
    right++;
  }

  return length;
};

module.exports = lengthOfLongestSubstring;
