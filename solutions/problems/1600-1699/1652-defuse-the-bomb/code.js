// https://leetcode.cn/problems/defuse-the-bomb/
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const length = code.length
  const res = new Array(length).fill(0)

  if (k === 0) {
    return res
  }

  // 计算，对于下标 0 而言，对应的 k 个数字的和，对应 code[l...r] 之间的和
  let l = k > 0 ? 1 : length + k
  let r = k > 0 ? k : length - 1
  let sum = 0

  for (let i = l; i <= r; i++) {
    sum += code[i]
  }

  for (let i = 0; i < length; i++) {
    res[i] = sum
    // 计算下一个数字对应区间的和，l，r 分别后移一位，同时要取模避免溢出
    sum -= code[l % length]
    sum += code[(r + 1) % length]
    l = l + 1
    r = r + 1
  }

  return res
};
module.exports = decrypt
