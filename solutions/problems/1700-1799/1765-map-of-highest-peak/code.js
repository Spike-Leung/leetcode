// https://leetcode-cn.com/problems/map-of-highest-peak/
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const rows = isWater.length;
  const cols = isWater[0].length;
  const ans = new Array(rows).fill(-1).map(() => new Array(cols).fill(-1));
  let queue = [];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (isWater[i][j] === 1) {
        ans[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const nextQueue = [];

    for (const [x, y] of queue) {
      for (const [offsetX, offsetY] of dirs) {
        const nx = x + offsetX;
        const ny = y + offsetY;
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          ans[nx][ny] === -1
        ) {
          ans[nx][ny] = ans[x][y] + 1;
          nextQueue.push([nx, ny]);
        }
      }
    }

    queue = nextQueue;
  }

  return ans;
};
