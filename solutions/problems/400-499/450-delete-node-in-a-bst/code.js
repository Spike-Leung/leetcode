// https://leetcode.cn/problems/delete-node-in-a-bst/
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) {
    return root;
  }

  const res = findTarget(root, null, key);

  // target node not found, return root
  if (res === null) {
    return root;
  }

  const { root: target, prevRoot } = res;

  if (!prevRoot) {
    return buildTree(target);
  } else if (prevRoot.left && prevRoot.left.val === target.val) {
    prevRoot.left = buildTree(target);
  } else {
    prevRoot.right = buildTree(target);
  }

  return root;
};


function findTarget(root, prevRoot = null, key) {
  if (root === null) {
    return null;
  }

  if (root.val === key) {
    return {
      root,
      prevRoot,
    };
  } else if (root.val < key) {
    return findTarget(root.right, root, key);
  }

  return findTarget(root.left, root, key);
}

function buildTree(root) {
  if (root.left) {
    findRightMostNode(root.left).right = root.right;
    return root.left;
  } else {
    return root.right;
  }
}

function findRightMostNode(root) {
  if (root.right === null) {
    return root;
  }

  return findRightMostNode(root.right);
}

module.exports = deleteNode;
