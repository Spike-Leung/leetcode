// https://leetcode.cn/problems/letter-tile-possibilities/
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let count = 0

  if (tiles === "") {
    return count
  }

  const length = tiles.length
  // 记录已经用过的字符下标，保证每个字符只被使用一次
  const visitedIndex = {}

  function backtrace(size) {
    if (size > 0) {
      count++
    }

    if (size === length) {
      return
    }

    // 记录同一层用过的字符，重复的字符不用重复构造，例如 AAB，A 和 A
    // 会被选为同一个开头，构造的序列是一样的，因此要剪枝掉
    const visitedChar = {}

    // 遍历所有字符，进行组合
    for (let i = 0; i < length; i++) {

      // 如果出现相同的字符，或者字符已经被使用过，则跳过这个字符
      if (visitedChar[tiles[i]] || visitedIndex[i]) {
        continue
      }

      visitedChar[tiles[i]] = true

      visitedIndex[i] = true
      backtrace(size + 1)
      visitedIndex[i] = false
    }
  }

  backtrace(0)

  return count
};
module.exports = numTilePossibilities
