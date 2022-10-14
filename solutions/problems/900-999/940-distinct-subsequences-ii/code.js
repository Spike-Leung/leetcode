// https://leetcode.cn/problems/distinct-subsequences-ii/
/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  // 由于只有 26 个字母，可以用一个数组去统计每个字母最后出现时，子序列的数量，初始为 0
  const last = new Array(26).fill(0)
  const MOD = Math.pow(10, 9) + 7

  // 遍历每一个字符，以这个字符作为结尾，统计这个字符的子序列数量
  for (const char of s) {
    // 自身作为子序列，数量为 1
    let total = 1
    // 计算这个字符的位置，和 last 对应， last[0] 为最后一个 a 结尾的子序列数量
    const idx = char.charCodeAt() - "a".charCodeAt()

    // 对于当前字符，子序列数量为自身 + 前面所有子序列拼接上自己（也即所有前面的子序列数量）
    for (let i = 0; i < 26; i++) {
      total += last[i] % MOD
    }

    // 更新当前字母最后一次出现时的数量
    last[idx] = total
  }

  // 累计所有最后出现的字母结尾的子序列数量和即为答案
  return last.reduce((acc, cur) => {
    acc += cur
    return acc % MOD
  })
}
module.exports = distinctSubseqII
