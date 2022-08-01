// https://leetcode-cn.com/problems/second-minimum-time-to-reach-destination/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  const graphs = new Array(n + 1).fill(0).map(() => new Array());

  for (const [a, b] of edges) {
    graphs[a].push(b);
    graphs[b].push(a);
  }

  const paths = new Array(n + 1)
    .fill(0)
        .map(() => new Array(2).fill(Number.MAX_VALUE));
  const queue = [];

  paths[1][0] = 0;
  queue.push([1, 0]);

  while (paths[n][1] === Number.MAX_VALUE) {
    const [cur, len] = queue.shift();

    for (const next of graphs[cur]) {
      if (len + 1 < paths[next][0]) {
        paths[next][0] = len + 1;
        queue.push([next, len + 1]);
      } else if (len + 1 > paths[next][0] && len + 1 < paths[next][1]) {
        paths[next][1] = len + 1;
        queue.push([next, len + 1]);
      }
    }
  }

  let res = 0;

  for (let i = 0; i < paths[n][1]; i++) {
    if (Number.parseInt(res / change, 10) % 2 === 1) {
      res = (Number.parseInt(res / change, 10) + 1) * change;
    }

    res += time;
  }

  return res;
};

module.exports = secondMinimum;
