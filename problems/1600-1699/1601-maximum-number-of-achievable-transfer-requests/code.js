// https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests/
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
  let ans = 0;
  let count  = 0;
  const delta = new Array(n).fill(0);
  let zero = n;

  function dfs(pos) {
    // 处理完所有请求
    if (pos === requests.length) {
      // 全部都是 0 才是合法的
      if (zero === n) {
        ans = Math.max(count, ans);
      }

      return;
    }

    // 不选择当前的请求
    dfs(pos + 1);

    const [from, to] = requests[pos];
    // 保存当前状态
    const z = zero;

    // 选择当前请求
    count++;

    // 如果修改前为 0， 则 zero - 1
    zero -= delta[from] === 0 ? 1 : 0;
    delta[from]--;
    // 如果修改后为0, 则 zero + 1
    zero += delta[from] === 0 ? 1 : 0;

    zero -= delta[to] === 0 ? 1 : 0;
    delta[to]++;
    zero += delta[to] === 0 ? 1 : 0;

    // 处理下一个请求
    dfs(pos + 1);

    // 恢复状态
    delta[from]++;
    delta[to]--;
    count--;
    zero = z;
  }

  dfs(0);

  return ans;
};

module.exports = maximumRequests;
