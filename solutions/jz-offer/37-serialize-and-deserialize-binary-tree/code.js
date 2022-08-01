/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  // 用 `$` 表示缺失的节点，补全完整的二叉树，从而得到唯一的序列
  if (root === null) {
    return "$";
  }

  // 前序遍历拼接序列
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  // 只有 $ 意味着没有任何节点，返回 null
  if (data === "$") {
    return null;
  }

  // 转化为数组便于遍历序列
  data = data.split(",");

  if (data.length === 0) {
    return null;
  }

  const root = new TreeNode();

  // 从根节点开始重建二叉树
  parse(root, data);

  return root;
};

function parse(root, data) {
  if (data.length === 0) {
    return;
  }

  // 每次从序列中拿到一个值
  const val = data.shift();

  // 如果值是数字，则构建节点
  if (val !== '$') {
    // 赋值
    root.val = val;

    // 新建一个 TreeNode 从而传递 left 节点的引用继续构建
    if (data[0] !== '$') {
      root.left = new TreeNode();
    }
    parse(root.left, data);

    if (data[0] !== '$') {
      root.right = new TreeNode();
    }
    parse(root.right, data);
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
