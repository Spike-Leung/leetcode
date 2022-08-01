// https://leetcode-cn.com/problems/grid-illumination/
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
  const ans = [];
  const row = new Map();
  const col = new Map();
  const diagonal = new Map();
  const antiDiagonal = new Map();
  const points = new Set();

  for (const lamp of lamps) {
    if (points.has(hash(lamp[0], lamp[1]))) {
      continue;
    }

    row.set(lamp[0], (row.get(lamp[0]) || 0) + 1);
    col.set(lamp[1], (col.get(lamp[1]) || 0) + 1);
    diagonal.set(lamp[1] - lamp[0], (diagonal.get(lamp[1] - lamp[0]) || 0) + 1);
    antiDiagonal.set(lamp[0] + lamp[1], (antiDiagonal.get(lamp[0] + lamp[1]) || 0) + 1);
    points.add(hash(lamp[0], lamp[1]));
  }

  for (const [qx, qy] of queries) {
    if (row.get(qx) || col.get(qy) || diagonal.get(qy - qx) || antiDiagonal.get(qx + qy)) {
      ans.push(1);
    } else {
      ans.push(0);
    }

    for (let r = qx - 1; r < qx + 2; r++) {
      for (let c = qy - 1; c < qy + 2; c++) {
        if (r < 0 || c < 0 || r >= n || c >= n || !points.has(hash(r, c))) {
          continue;
        }

        points.delete(hash(r, c));
        row.set(r, row.get(r) - 1);
        col.set(c, col.get(c) - 1);
        diagonal.set(c - r, diagonal.get(c - r) - 1);
        antiDiagonal.set(r + c, antiDiagonal.get(r + c) - 1);
      }
    }
  }

  return ans;
};

function hash(x, y) {
  return `${x},${y}`;
}

module.exports = gridIllumination;
