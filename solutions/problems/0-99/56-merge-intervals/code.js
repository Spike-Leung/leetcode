// https://leetcode.cn/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort(([a], [b]) => a - b)
  const res = [intervals[0]]
  const n = intervals.length

  for (let i = 1; i < n; i++) {
    const [currLeft, currRight] = intervals[i]
    const [lastLeft, lastRight] = res[res.length - 1]

    // 与上一个区间进行比较，如果新的区间，左边界落在上一个区间内，则表明区间存在重合
    if (currLeft >= lastLeft && currLeft <= lastRight) {
      const maxRight = Math.max(currRight, lastRight)
      res[res.length - 1][1] = maxRight
    } else {
      res.push(intervals[i])
    }
  }

  return res
}
module.exports = merge
