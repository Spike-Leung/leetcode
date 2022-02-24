// https://leetcode-cn.com/problems/where-will-the-ball-fall/
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
  const ret = [];
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < n; i++) {
    ret[i] = dfs(0, i);
  }

  function dfs(row, col) {
    const dir = grid[row][col];

    // 挡板向右下方倾斜
    if (dir === 1) {
      // 如果已经是盒子边缘，或者右边的挡板向左下方倾斜，那么球就会被卡住
      if ((col === n - 1) || (grid[row][col + 1] === -1)) {
        return -1;
      } else if (row === m - 1) {
        // 如果没有被卡住，并且已经到了盒底，则返回出口下标
        return col + 1;
      } else {
        // 没有卡住，也还没到底，继续向下走
        return dfs(row + 1, col + 1);
      }
    }

    if ((col === 0) || (grid[row][col - 1] === 1)) {
      return -1;
    } else if (row === m - 1) {
      return col - 1;
    }

    return dfs(row + 1, col - 1);
  }

  return ret;
};

module.exports = findBall;
