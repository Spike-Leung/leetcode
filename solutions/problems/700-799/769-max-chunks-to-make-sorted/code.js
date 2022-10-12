// https://leetcode.cn/problems/max-chunks-to-make-sorted/
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let count = 0
  let max = 0
  const n = arr.length
  let i = 0

  while (i < n) {
    max = Math.max(max, arr[i])

    if (max == i) {
      count++
    }

    i++
  }

  return count
}
module.exports = maxChunksToSorted
