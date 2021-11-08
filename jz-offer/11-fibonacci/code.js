/**
 *
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 *
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let last1 = 1;
  let last2 = 0;

  for (let i = 2; i <= n; i++) {
    const temp = last1;

    // 要每次计算后都取模，而不是返回结果才取模
    last1 = (last1 + last2) % (1e9 + 7);
    last2 = temp;
  }

  return last1;
};

module.exports = fib;
