// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];
  let currentLevelCount = 1;
  let nextLevelCount = 0;

  while (queue.length) {
    const currentLevelNode = [];

    while (currentLevelCount > 0) {
      const node = queue.shift();
      currentLevelCount--;

      currentLevelNode.push(node.val);

      if (node.left) {
        queue.push(node.left);
        nextLevelCount++;
      }

      if (node.right) {
        queue.push(node.right);
        nextLevelCount++;
      }
    }

    result.push(currentLevelNode);
    currentLevelCount = nextLevelCount;
    nextLevelCount = 0;
  }

  return result;
};
