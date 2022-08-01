const {
  postorderTraversal,
  postorderTraversal1,
  postorderTraversal2,
  postorderTraversal3,
  postorderTraversalMorris,
} = require("./code");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3, node1, node2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6, node4, node5);
const root = new TreeNode(0, node3, node6);

const res = [1, 2, 3, 4, 5, 6, 0];

test(`Postorder traversal of ${root} should be ${res}`, () => {
  expect(postorderTraversal(root)).toEqual(res);
  expect(postorderTraversal1(root)).toEqual(res);
  expect(postorderTraversal2(root)).toEqual(res);
  expect(postorderTraversal3(root)).toEqual(res);
  expect(postorderTraversalMorris(root)).toEqual(res);
});

test(`Postorder traversal of ${null} should be ${[]}`, () => {
  expect(postorderTraversal(null)).toEqual([]);
  expect(postorderTraversal1(null)).toEqual([]);
  expect(postorderTraversal2(null)).toEqual([]);
  expect(postorderTraversal3(null)).toEqual([]);
  expect(postorderTraversalMorris(null)).toEqual([]);
});
