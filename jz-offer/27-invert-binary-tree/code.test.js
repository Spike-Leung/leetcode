const mirrorTree = require("./code");

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

test("binary tree should be inverted, only root", () => {
  const rootNode = new TreeNode(4);
  expect(mirrorTree(rootNode)).toEqual(rootNode);
});

test("binary tree should be inverted", () => {
  /**
         4
        / \
       2   7
      / \  /
     1   3 6
   */
  const rootNode = (() => {
    const rootNode = new TreeNode(4);
    const node2 = new TreeNode(2);
    const node7 = new TreeNode(7);
    const node1 = new TreeNode(1);
    const node3 = new TreeNode(3);
    const node6 = new TreeNode(6);
    const node9 = new TreeNode(9);

    node2.left = node1;
    node2.right = node3;

    node7.left = node6;

    rootNode.left = node2;
    rootNode.right = node7;

    return rootNode;
  })();

  /**
         4
        / \
       7   2
       \  / \
        6 3 1
   */
  const invertedTree = (() => {
    const rootNode = new TreeNode(4);
    const node2 = new TreeNode(2);
    const node7 = new TreeNode(7);
    const node1 = new TreeNode(1);
    const node3 = new TreeNode(3);
    const node6 = new TreeNode(6);
    const node9 = new TreeNode(9);

    node2.left = node3;
    node2.right = node1;

    node7.right = node6;

    rootNode.left = node7;
    rootNode.right = node2;

    return rootNode;
  })();

  expect(mirrorTree(rootNode)).toEqual(invertedTree);
});
