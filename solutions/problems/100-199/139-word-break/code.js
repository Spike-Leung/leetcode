// https://leetcode.cn/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordDictMap = {}
  const memo = []
  const n = s.length

  // 构造哈希表，便于查询单词是否存在
  wordDict.forEach((w) => (wordDictMap[w] = true))

  function canBreak(start) {
    // 字符串到头了，说明搜索完了，意味着全部都能匹配
    if (start === n) {
      return true
    }

    // 如果从某个下标开始的子串已经检查过了，则直接使用其结果
    if (memo[start] !== undefined) {
      return memo[start]
    }

    // 从 start 开始，一点点截取 prefix，从而拆分单词，判断 prefix 和 剩余子串是否在单词表中
    for (let i = start + 1; i <= n; i++) {
      const prefix = s.slice(start, i)

      if (wordDictMap[prefix] && canBreak(i)) {
        // 存储当前 start 的结果
        memo[start] = true
        return true
      }
    }

    memo[start] = false

    return false
  }

  return canBreak(0)
}
module.exports = wordBreak
