// https://leetcode.cn/problems/binary-tree-right-side-view/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) {
    return [];
  }

  const res = [];
  let nodes = [root];


  while (nodes.length) {
    const nextLevelNodes = [];

    res.push(nodes[0].val);

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      node.right && (nextLevelNodes.push(node.right));
      node.left && (nextLevelNodes.push(node.left));
    }

    nodes = nextLevelNodes;
  }


  return res;
};

var rightSideViewDFS = function(root) {
  if (root === null) {
    return [];
  }

  const res = [];

  (function dfs(root, depth) {
    if (root === null) {
      return;
    }

    if (res[depth] === undefined) {
      res.push(root.val);
    }

    depth++;
    dfs(root.right, depth);
    dfs(root.left, depth);
  }(root, 0));

  return res;
};


module.exports = rightSideView;
