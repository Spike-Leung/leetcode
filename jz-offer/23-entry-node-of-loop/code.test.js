const detectCycle = require("./code");

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(3);

const lastNode = [2, 0, -4].reduce((acc, cur) => {
  const node = new ListNode(cur);
  acc.next = node;
  acc = node;
  return acc;
}, head);

lastNode.next = head.next;

test(`[3, 2, 0, -4]'s pos is 1`, () => {
  expect(detectCycle(head)).toBe(1);
});
