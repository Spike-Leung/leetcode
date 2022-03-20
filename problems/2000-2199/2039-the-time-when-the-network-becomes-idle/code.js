// https://leetcode-cn.com/problems/the-time-when-the-network-becomes-idle/
/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
  const edgesMap = new Map();
  const minPathMap = new Map();

  for (const [u, v] of edges) {
    edgesMap.get(u) !== undefined
      ? edgesMap.get(u).add(v)
      : edgesMap.set(u, new Set([v]));

    edgesMap.get(v) !== undefined
      ? edgesMap.get(v).add(u)
      : edgesMap.set(v, new Set([u]));
  }

  (function bfs() {
    let length = 0;
    let stack = [...edgesMap.get(0)];

    while (stack.length) {
      length++;
      const nextStack = [];

      for (let i = 0; i < stack.length; i++) {
        const server = stack[i];

        if (minPathMap.get(server) === undefined) {
          minPathMap.set(server, length);
        }

        nextStack.push(
          ...[...edgesMap.get(server)].filter(
            (s) => s !== 0 && minPathMap.get(s) === undefined
          )
        );
      }

      stack = nextStack;
    }
  })();

  let minTime = 0;

  for (let i = 1; i < patience.length; i++) {
    const path = minPathMap.get(i);
    const time =
      Math.floor((path * 2 - 1) / patience[i]) * patience[i] + 2 * path + 1;

    if (time > minTime) {
      minTime = time;
    }
  }

  return minTime;
};

module.exports = networkBecomesIdle;
