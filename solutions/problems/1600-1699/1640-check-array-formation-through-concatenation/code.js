// https://leetcode.cn/problems/check-array-formation-through-concatenation/
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const map = {}
  const length = arr.length

  for (const piece of pieces) {
    map[piece[0]] = piece
  }

  let i = 0
  while (i < length) {
    const piece = map[arr[i]]

    if (piece === undefined) {
      return false
    }

    for (const num of piece) {
      if (num !== arr[i]) {
        return false
      } else {
        i++
      }
    }
  }

  return true
}
module.exports = canFormArray
