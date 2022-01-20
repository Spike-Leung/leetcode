// https://leetcode-cn.com/problems/stone-game-ix/
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  const counts = [0, 0, 0];

  for (let i = 0; i < stones.length; i++) {
    counts[stones[i] % 3]++;
  }

  return counts[0] % 2 === 0
    ? counts[1] !== 0 && counts[2] !== 0
    : Math.abs(counts[1] - counts[2]) > 2;
};

module.exports = stoneGameIX;
