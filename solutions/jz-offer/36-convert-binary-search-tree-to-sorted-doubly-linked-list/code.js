// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root === null) {
    return null;
  }

  function dfs(cur) {
    if (cur === null) {
      return;
    }

    dfs(cur.left, pre, head);

    if (pre === null) {
      head = cur;
    } else {
      pre.right = cur;
      cur.left = pre;
    }

    pre = cur;

    dfs(cur.right, pre, head);
  }

  let pre = null, head = null;

  dfs(root, pre, head);

  head.left = pre;
  pre.right = head;

  return head;
};
