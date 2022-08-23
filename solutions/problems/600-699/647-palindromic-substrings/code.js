// https://leetcode.cn/problems/palindromic-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const n = s.length
  // 可以数一下 "abc"
  // 有 n 个 1 个字符的中心点
  // 有 n - 1 个 2 个字符的中心点
  const centerCount = 2 * n - 1
  let ans = 0

  for (let center = 0; center < centerCount; center++) {
    let left = Math.floor(center / 2)
    let right = left + center % 2

    // 由于是往两边扩展，需要判断两边不越界
    // 每次判断 left right 指向的值是否相同，相同的可以扩展回文
    while (left >= 0 && right <= n && s[left] == s[right]) {
      ans++
      left--
      right++
    }
  }

  return ans
};
module.exports = countSubstrings
