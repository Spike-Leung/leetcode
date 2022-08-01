/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [root];
  const rootVisted = new Set();

  while (root || stack.length) {
    // 从右往左入栈，直到遍历到叶子节点
    while (root.children.length && !rootVisted.has(root)) {
      // 子节点全部入栈后，标记根节点，避免重复遍历
      rootVisted.add(root);

      for (let i = root.children.length - 1; i >= 0; i--) {
        stack.push(root.children[i]);
      }

      // root 设置为最左边的节点，如果此节点还有子节点，则继续遍历其子节点
      root = stack[stack.length - 1];
    }

    // 此时，栈顶的元素肯定已经子节点或者已经遍历过了
    const node = stack.pop();
    res.push(node.val);

    // 出栈后，设置 root 为栈顶元素，root 有可能是一个子节点还没被遍历的节点
    root = stack[stack.length - 1];
  }

  return res;
};
