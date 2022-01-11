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

  const maxIndex = Math.pow(10, 6);
  const blockedSet = {};
  const visitedSet = {};

  blocked.forEach((b) => (blockedSet[b.join(",")] = true));

  let count = 0;

  function move(x, y) {
    if (x === target[0] && y === target[1]) {
      return true;
    }

    const pos = `${x},${y}`;
    if (
      blockedSet[pos] ||
      visitedSet[pos] ||
      x < 0 ||
      y < 0 ||
      x >= maxIndex ||
      y >= maxIndex
    ) {
      return false;
    }

    visitedSet[pos] = true;

    const res =
      move(x + 1, y) || move(x - 1, y) || move(x, y - 1) || move(x, y + 1);

    delete visitedSet[pos];

    return res;
  }

  return move(source[0], source[1]);
};

module.exports = isEscapePossible;
