// https://leetcode.cn/problems/k-th-symbol-in-grammar/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) {
    return 0
  }

  if (n === 2) {
    return k === 1 ? 0 : 1
  }

  const halfLength = Math.pow(2, n - 2)

  if (k > halfLength) {
    let index = (halfLength / 2 + k - halfLength) % (halfLength)

    index = index === 0 ? halfLength : index
    return kthGrammar(
      n - 1,
      index
    )
  } else {
    return kthGrammar(n - 1, k)
  }
}
module.exports = kthGrammar
