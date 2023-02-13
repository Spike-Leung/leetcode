// https://leetcode.cn/problems/replace-the-substring-for-balanced-string/
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  let minSubStrLength = Number.MAX_SAFE_INTEGER
  const length = s.length
  const avgCount = length / 4
  const countMap = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0
  }

  for (const c of s) {
    countMap[c]++
  }

  for (let l = 0, r = 0; l < length; l++) {
    // 当前子串不合法，则扩大有边界，使得子串变长，子串外的数量减少
    while (r < length && !check(countMap, avgCount)) {
      countMap[s[r]]--
      r++
    }

    // r >= length，到达有边界，依然没有符合的，结束搜索
    if (!check(countMap, avgCount)) {
      break
    }

    // 子串合法时，记录字串长度
    minSubStrLength = Math.min(minSubStrLength, r - l)
    // 此时左边界需要右移，右移后，子串外的字符就会增加
    countMap[s[l]]++
  }

  return minSubStrLength
};

function check(countMap, avgCount) {
  return Object.values(countMap).every((count) => count <= avgCount)
}
module.exports = balancedString
