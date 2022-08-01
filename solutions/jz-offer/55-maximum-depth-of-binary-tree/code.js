/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepthBFS = function (root) {
  if (!root) {
    return 0;
  }

  let queue = [root];
  let nextLevelNodes = [];
  let depth = 0;

  while (queue.length) {
    nextLevelNodes = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      (node.left && nextLevelNodes.push(node.left));
      (node.right && nextLevelNodes.push(node.right));
    }

    depth++;

    queue = nextLevelNodes;
  }

  return depth;
};
