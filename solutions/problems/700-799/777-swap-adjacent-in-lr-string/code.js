// https://leetcode.cn/problems/swap-adjacent-in-lr-string/
/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
  const n = start.length

  let i = 0, j = 0

  // 两者任意一个未遍历到头
  while (i < n || j < n) {
    // 找到各自第一个非 X 的字符
    while (i < n && start[i] === "X") {
      i++
    }

    while (j < n && end[j] === "X") {
      j++
    }

    // 一直跳过 X，有一个串到头了，另一个串应该也到头，才是能够转换的
    if (i === n || j === n) {
      return i === j
    }

    // 字符相对位置不同
    if (start[i] !== end[j]) {
      return false
    }

    // start 中 L 下标应该大于等于 end 中的 L 的下标
    if (start[i] === "L" && i < j) {
      return false
    }

    // start 中 R 下标应该小于等于 end 中 R 的下标
    if (start[i] === "R" && i > j) {
      return false
    }

    // 字符相同，且符合相对位置，继续匹配下一个字符
    i++
    j++
  }

  return true
};
module.exports = canTransform
