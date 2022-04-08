// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  let currentLevel = [root];

  while (currentLevel.length) {
    const currentLevelRes = [];
    const nextLevel = [];

    for (let i = 0; i < currentLevel.length; i++) {
      currentLevelRes.push(currentLevel[i].val);

      if (currentLevel[i].children) {
        currentLevel[i].children.forEach((c) => nextLevel.push(c));
      }
    }

    res.push(currentLevelRes);
    currentLevel = nextLevel;
  }

  return res;
};
module.exports = levelOrder;
