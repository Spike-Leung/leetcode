// https://leetcode-cn.com/problems/elimination-game/
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let head = 1;
  let step = 1;
  let left = true;

  while (n > 1) {
    if (left || n % 2 === 1) {
      head += step;
    }

    step <<= 1;
    n >>= 1;
    left = !left;
  }

  return head;
};

module.exports = lastRemaining;
