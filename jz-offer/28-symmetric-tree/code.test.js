const isSymmetric = require("./code");

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

test(`tree is symmetric`, () => {
  const rootNode = (() => {
    const rootNode = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node2_1 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node3_1 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node4_1 = new TreeNode(4);

    node2.left = node3;
    node2.right = node4;
    node2_1.left = node4_1;
    node2_1.right = node3_1;
    rootNode.left = node2;
    rootNode.right = node2_1;

    return rootNode;
  })();

  expect(isSymmetric(rootNode)).toBe(true);
});

test(`tree is not symmetric`, () => {
  const rootNode = (() => {
    const rootNode = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node2_1 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node3_1 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node4_1 = new TreeNode(4);

    node2.left = node3;
    // node2.right = node4;
    node2_1.left = node4_1;
    // node2_1.right = node3_1;
    rootNode.left = node2;
    rootNode.right = node2_1;

    return rootNode;
  })();

  expect(isSymmetric(rootNode)).toBe(false);
});

test(`empty tree is symmetric`, () => {
  expect(isSymmetric(null)).toBe(true);
});
