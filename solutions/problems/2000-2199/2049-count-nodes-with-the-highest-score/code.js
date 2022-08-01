// https://leetcode-cn.com/problems/count-nodes-with-the-highest-score/
/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  const n = parents.length;
  let maxScore = 0;
  let cnt = 0;
  const childrens = Array.from({ length: n}, () => []);

  // 构建每个节点的子节点
  for (let i = 1; i < n; i++) {
    childrens[parents[i]].push(i);
  }

  // 比较分数以及统计最大分数的次数
  function accumulateCnt(score) {
    if (score === maxScore) {
      cnt++;
    } else if (score > maxScore) {
      cnt = 1;
      maxScore = score;
    }
  }

  function dfs(node) {
    let score = 1;

    // 子节点
    if (childrens[node].length === 0) {
      score = n - 1;
      accumulateCnt(score);
      return 1;
    }

    let subtreeSizeSum = 0;

    for (const cNode of childrens[node]) {
      const size = dfs(cNode);
      // 统计左右子节点的个数总和
      subtreeSizeSum += size;
      score *= size;
    }

    // 如果不是根节点，则把以当前节点为根节点的子树移除，计算剩余子树的节点个数
    if (node !== 0) {
      score *= (n - subtreeSizeSum - 1);
    }

    accumulateCnt(score);

    // 有子节点的子树的长度为子树节点总数 + 1
    return subtreeSizeSum + 1;
  }

  dfs(0);

  return cnt;
};

module.exports = countHighestScoreNodes;
