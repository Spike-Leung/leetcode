// https://leetcode.cn/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const originColor = image[sr][sc]
  const rows = image.length
  const cols = image[0].length

  function dfs(x, y, rows, cols) {
    // 越界
    if (x < 0 || y < 0 || x === rows || y === cols) {
      return
    }

    // 和初始颜色不同，或者已经是目标颜色
    if (image[x][y] !== originColor || image[x][y] === color) {
      return
    }

    // 设置为目标颜色
    image[x][y] = color

    // 向上下左右扩散，更改颜色
    dfs(x + 1, y, rows, cols)
    dfs(x - 1, y, rows, cols)
    dfs(x, y + 1, rows, cols)
    dfs(x, y - 1, rows, cols)
  }

  dfs(sr, sc, rows, cols)

  return image
};
module.exports = floodFill
