// https://leetcode-cn.com/problems/the-time-when-the-network-becomes-idle/
/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
  const n = patience.length;
  const edgesMap = Array.from({ length: n }, () => []);
  const visited = new Set();
  let minTime = 0;

  for (const [u, v] of edges) {
    edgesMap[u].push(v);
    edgesMap[v].push(u);
  }

  let length = 1;
  let stack = edgesMap[0];
  visited.add(0);

  while (stack.length) {
    const nextStack = [];

    for (let i = 0; i < stack.length; i++) {
      const server = stack[i];

      if (visited.has(server)) {
        continue;
      }

      const time =
        Math.floor((length * 2 - 1) / patience[server]) * patience[server] +
        2 * length +
        1;

      if (time > minTime) {
        minTime = time;
      }

      visited.add(server);
      nextStack.push(...edgesMap[server]);
    }

    stack = nextStack;
    length++;
  }

  return minTime;
};

module.exports = networkBecomesIdle;
