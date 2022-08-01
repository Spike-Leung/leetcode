// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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

// 递归
var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const res = [];

  function dfs(root) {
    if (!root) {
      return;
    }

    root.left && dfs(root.left);
    root.right && dfs(root.right);
    res.push(root.val);
  }

  dfs(root);

  return res;
};

// 遍历1
var postorderTraversal1 = function (root) {
  if (!root) {
    return [];
  }

  const res = [];
  const hasVisited = new Set();
  const stack = [root];

  while (root || stack.length) {
    while (!hasVisited.has(root) && (root.left || root.right)) {
      hasVisited.add(root);
      root.right && stack.push(root.right);
      root.left && stack.push(root.left);

      root = stack[stack.length - 1];
    }

    res.push(stack.pop().val);
    root = stack[stack.length - 1];
  }

  return res;
};

// 遍历2
var postorderTraversal2 = function (root) {
  if (!root) {
    return [];
  }

  const res = [];
  let prev = null;
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    if (!root.right || root.right === prev) {
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }

  return res;
};

// 遍历3
var postorderTraversal3 = function (root) {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return res;
};

// Morris 遍历
var postorderTraversalMorris = function (root) {
  if (!root) {
    return [];
  }

  let cur = root;
  let mostRight = null;
  let res = [];

  // 看成单侧的链表做链表反转
  function reverseEdge(head) {
    let prev = null;
    let next = null;

    while (head) {
      next = head.right;
      head.right = prev;
      prev = head;
      head = next;
    }

    return prev;
  }

  function collectResult(head) {
    const tail = reverseEdge(head);
    let cur = tail;

    while (cur) {
      res.push(cur.val);
      cur = cur.right;
    }

    reverseEdge(tail);
  }

  while (cur) {
    if (!cur.left) {
      cur = cur.right;
      continue;
    }

    mostRight = cur.left;

    while (mostRight.right && mostRight.right !== cur) {
      mostRight = mostRight.right;
    }

    // 第二次访问
    if (mostRight.right === cur) {
      mostRight.right = null;
      collectResult(cur.left);
      cur = cur.right;
      continue;
    }

    // 第一次访问
    mostRight.right = cur;
    cur = cur.left;
  }

  collectResult(root);

  return res;
};

module.exports = {
  postorderTraversal,
  postorderTraversal1,
  postorderTraversal2,
  postorderTraversal3,
  postorderTraversalMorris,
};
