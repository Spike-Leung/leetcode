// https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let maxLen = 0;
  let n = s.length;
  const countMap = {};

  if (n < k) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    countMap[s[i]] ? countMap[s[i]]++ : (countMap[s[i]] = 1);
  }

  Object.keys(countMap).forEach((i) => {
    if (countMap[i] >= k) {
      delete countMap[i];
    }
  });

  if (Object.keys(countMap).length === 0) {
    return n;
  }

  let start = 0;
  let pos = 0;
  while (pos < n) {
    start = pos;

    while (pos < n && !countMap[s[pos]]) {
      pos++;
    }

    maxLen = Math.max(maxLen, longestSubstring(s.slice(start, pos), k));
    pos++;
  }

  return maxLen;
};

module.exports = longestSubstring;
