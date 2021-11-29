// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) {
    return root;
  }

  if (!root.left && !root.right) {
    root.left = root;
    root.right = root;
    return root;
  }

  let leftHead = root,
    leftTail = root,
    rightHead = root,
    rightTail = root;

  if (root.left) {
    ({ head: leftHead, tail: leftTail } = traverseInOrder(root.left));
  }

  if (root.right) {
    ({ head: rightHead, tail: rightTail } = traverseInOrder(root.right));
  }

  if (root.left) {
    leftTail.right = root;
    root.left = leftTail;
  }

  if (root.right) {
    root.right = rightHead;
    rightHead.left = root;
  }

  leftHead.left = rightTail;
  rightTail.right = leftHead;

  return leftHead;
};

/**
 * @param {Node} root
 * @param {Node} parent
 * @return { Node head, Node tail }
 */
function traverseInOrder(root) {
  let head = root, tail = root;

  if (root.left && !root.left.left && !root.left.right) {
    head = root.left;
  }

  if (root.right && !root.right.left && !root.right.right) {
    tail = root.right;
  }

  if (root.left) {
    ({ head } = traverseInOrder(root.left));
    root.left.right = root;
  }

  if (root.right) {
    ({ tail } = traverseInOrder(root.right));
    root.right.left = root;
  }

  return {
    head,
    tail,
  };
}
