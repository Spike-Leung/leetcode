// https://leetcode.cn/problems/split-a-string-into-the-max-number-of-unique-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  let count = 0

  if (s === "") {
    return count
  }

  const length = s.length
  const path = []
  const used = {}

  function backtrace(start) {
    if (start === length) {
      // 取其中最大值
      count = Math.max(path.length, count)
      return
    }

    // 划分字符
    for (let i = start; i < length; i++) {
      const str = s.slice(start, i + 1)

      // 如果划分的字符已经存在，则跳过这个字符组合，尝试其他字符组合
      if (used[str]) {
        continue
      }

      used[str] = true
      path.push(str)
      // 从下一个字符起点开始找新的字符
      backtrace(i + 1)
      used[str] = false
      path.pop(str)
    }
  }

  backtrace(0)

  return count
};
module.exports = maxUniqueSplit
