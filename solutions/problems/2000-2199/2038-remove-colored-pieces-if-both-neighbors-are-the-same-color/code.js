// https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let aliceAbleMove = 0;
  let bobAbleMove = 0;
  const n = colors.length;
  let aCount = 0;
  let bCount = 0;

  for (let i = 0; i < n; i++) {
    if (colors[i] === "A") {
      aCount++;
      if (bCount > 2) {
        bobAbleMove += bCount - 2;
      }
      bCount = 0;
    } else {
      bCount++;

      if (aCount > 2) {
        aliceAbleMove += aCount - 2;
      }
      aCount = 0;
    }
  }

  aCount > 2 && (aliceAbleMove += (aCount - 2));
  bCount > 2 && (bobAbleMove += (bCount - 2));

  return aliceAbleMove > bobAbleMove;
};

module.exports = winnerOfGame;
