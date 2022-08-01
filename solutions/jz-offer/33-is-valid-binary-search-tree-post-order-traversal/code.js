// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/submissions/
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  if (postorder.length === 0 || postorder.length === 1) {
    return true;
  }

  const rootIndex = postorder.length - 1;
  const root = postorder[rootIndex];
  let lastLeftNodeIndex = 0;

  // 左节点都小于根节点
  for (let i = 0; i < rootIndex; i++) {
    if (postorder[i] > root) {
      break;
    }
    lastLeftNodeIndex = i;
  }

  // 右节点都大于根节点
  for (let i = lastLeftNodeIndex + 1; i < rootIndex; i++) {
    if (postorder[i] < root) {
      return false;
    }
  }

  // 继续判断左右节点是否满足搜索二叉树的条件
  const leftNodes = postorder.slice(0, lastLeftNodeIndex + 1);
  const rightNodes = postorder.slice(lastLeftNodeIndex + 1, rootIndex);

  return verifyPostorder(leftNodes) && verifyPostorder(rightNodes);
};

module.exports = verifyPostorder;
