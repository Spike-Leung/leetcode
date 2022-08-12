// https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree/
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  /*
   * diff = 出度 - 入度
   * 对于非空节点，入度为 1，出度为 2，但根节点入度为 0，出度为 2
   * 计算时，对于非空节点，总是减去 1 个入度，加上 2 个出度
   * 刚开始时，遍历到根节点，此时 diff 应该是 diff = 0 + 2 = 2
   * 但计算时是， diff = -1 + 2 = 1, 为了符合根节点的特性，因此初始化 diff 为 1
   */
  let diff = 1
  const nodes = preorder.split(",")
  const n = nodes.length

  for (let i = 0; i < n; i++) {
    const node = nodes[i]

    // 对于空节点，非空节点，要减去 1 个入度
    diff -= 1

    // 在这里判断一次 diff，因为对于空节点，没有添加出度的操作，此时需要对空节点判断是否符合条件
    if (diff < 0) {
      return false
    }

    if (node !== "#") {
      diff += 2
    }
  }

  return diff === 0
}
module.exports = isValidSerialization
