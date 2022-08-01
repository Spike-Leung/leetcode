// https://leetcode-cn.com/problems/escape-a-large-maze/
/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function (blocked, source, target) {
  if (blocked.length === 0) {
    return true;
  }

  const n = blocked.length;
  const maxArea = (n * (n - 1)) / 2;
  const blockedSet = new Set();
  blocked.forEach((b) => blockedSet.add(convert(b[0], b[1])));

  return (
    bfs(source, target, blockedSet, maxArea) &&
    bfs(target, source, blockedSet, maxArea)
  );
};

function bfs(source, target, blockedSet, maxArea) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visitedSet = new Set();
  const maxIndex = Math.pow(10, 6);
  const queue = [source];

  visitedSet.add(convert(source[0], source[1]));

  while (queue.length > 0) {
    const point = queue.pop();

    for (let dir of dirs) {
      const x = point[0] + dir[0];
      const y = point[1] + dir[1];
      const pos = convert(x, y);

      if (
        x >= 0 &&
        x < maxIndex &&
        y >= 0 &&
        y < maxIndex &&
        !blockedSet.has(pos) &&
        !visitedSet.has(pos)
      ) {
        if (x === target[0] && y === target[1]) {
          return true;
        }

        visitedSet.add(pos);

        if (visitedSet.size > maxArea) {
          return true;
        }

        queue.push([x, y]);
      }
    }
  }

  return false;
}

function convert(x, y) {
  return x * 1000001 + y;
}

module.exports = isEscapePossible;
