// https://leetcode.cn/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const n = candidates.length
  const ans = []

  // candidate: 当前选择的元素
  // preTarget: 选择当前元素前，还需要满足的 target 的值
  // startIndex: 现在应该从哪个元素开始匹配
  // preCandidates: 暂存之前选择的元素
  function canCombine(candidate, preTarget, startIndex, preCandidates = []) {
    const target = preTarget - candidate

    if (target <= 0) {
      // 当 target 恰好被分解成 0，意味着找到一个组合，保存到结果中
      target === 0 && ans.push(preCandidates.concat(candidate))
      return
    }

    // 处理过的元素不再选择，例如 [2,3,4], 当选择 2 作为第一个元素时，会得到 [2,2,2],[2,2,3],[2,2,4],[2,3,3]...等很多组合，这里已经存在包含 2 的所有组合
    // 因此，后面再去找元素时，就不用再考虑包含 2 的组合
    for (let i = startIndex; i < n; i++) {
      canCombine(candidates[i], target, i, preCandidates.concat(candidate))
    }
  }

  // 以任意元素开始，进行判断
  for (let i = 0; i < n; i++) {
    canCombine(candidates[i], target, i)
  }

  return ans
};

module.exports = combinationSum
