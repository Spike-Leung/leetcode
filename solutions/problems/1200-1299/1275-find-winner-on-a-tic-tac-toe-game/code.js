/**
 * 1275. Find Winner on a Tic Tac Toe Game
 *
 * https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game/
 *
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const indexArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const flatFillArr = Array.from({ length: 9 }).fill("");
  const moveLength = moves.length;
  let result = "";

  if (moveLength < 5) {
    return "Pending";
  }

  moves.forEach((m, index) => {
    const [r, c] = m;
    flatFillArr[indexArr[r][c]] = index % 2 === 0 ? "A" : "B";
  });

  const winCombinations = ["012", "345", "678", "036", "147", "258", "048", "246"];

  winCombinations.some((w) => {
    const a = flatFillArr[w[0]];
    const b = flatFillArr[w[1]];
    const c = flatFillArr[w[2]];

    // not empty and all be same
    if (a && b && c && a == b && a == c) {
      result = a;
      return true;
    }

    return false;
  });

  return result || (moveLength === 9 ? "Draw" : "Pending");
};

module.exports = tictactoe;
