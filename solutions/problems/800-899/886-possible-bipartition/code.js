// https://leetcode.cn/problems/possible-bipartition/
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  // groups: [0, 1, 2, ...] 0 表示未分组，1， 2 表示两个分组
  const groups = new Array(n + 1).fill(0)
  const dislikeMap = Array.from({ length: n + 1 }, () => [])

  for (const [n1, n2] of dislikes) {
    dislikeMap[n1].push(n2)
    dislikeMap[n2].push(n1)
  }

  function dfs(currNum, group) {
    groups[currNum] = group

    for (const dislikeNum of dislikeMap[currNum]) {
      // 如果不喜欢的人已经分组，并且和自己在同一组，意味着存在冲突，无法完成分组
      if (groups[dislikeNum] !== 0 && groups[dislikeNum] === group) {
        return false
      }

      // 如果不喜欢的人没分组，则将其分到另一组, 如果无法分配，说明存在冲突，返回 false
      // 3 ^ group 利用异或操作，把 1 变为 2，2 变为 1
      // 11(3) ^ 01 (1) = 10 (2), 11(3) ^ 10(2) = 01(1)
      if (groups[dislikeNum] === 0 && !dfs(dislikeNum, 3 ^ group)) {
        return false
      }
    }

    // 所有人完成分配
    return true
  }

  for (let i = 1; i <= n; i++) {
    if (groups[i] === 0 && !dfs(i, 1)) {
      return false
    }
  }

  return true
}
module.exports = possibleBipartition
