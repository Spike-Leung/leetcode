// https://leetcode-cn.com/problems/all-oone-data-structure/
var AllOne = function() {
  this.map = {};
  this.head = new DoubleLinkedNode();
  this.tail = new DoubleLinkedNode();

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  if (this.map[key]) {
    const node = this.map[key];
    node.keys.delete(key);

    const newVal = node.value + 1;
    let next = null;

    if (node.next.value === newVal) {
      next = node.next;
    } else {
      const newNode = new DoubleLinkedNode(newVal);
      newNode.next = node.next;
      newNode.prev = node;
      node.next = newNode;
      newNode.next.prev = newNode;
      next = newNode;
    }

    next.keys.add(key);
    this.map[key] = next;
    node.keys.size === 0 && this.removeNode(node);
  } else {
    let next = null;

    if (this.head.next.value === 1) {
      next = this.head.next;
    } else {
      next = new DoubleLinkedNode(1);
      next.next = this.head.next;
      next.prev = this.head;
      this.head.next = next;
      next.next.prev = next;
    }

    next.keys.add(key);
    this.map[key] = next;
  }
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  const node = this.map[key];
  node.keys.delete(key);
  const newVal = node.value - 1;

  if (newVal === 0)  {
    Reflect.deleteProperty(this.map, key);
  } else {
    let prev = null;

    if (node.prev.value === newVal) {
      prev = node.prev;
    } else {
      prev = new DoubleLinkedNode(newVal);
      prev.next = node;
      prev.prev = node.prev;
      node.prev.next = prev;
      node.prev = prev;
    }

    prev.keys.add(key);
    this.map[key] = prev;
  }

  node.keys.size === 0 && this.removeNode(node);
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  const { keys } = this.head.next;
  return keys.size ? keys.values().next().value : "";
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  const { keys } = this.tail.prev;
  return keys.size ? keys.values().next().value : "";
};

AllOne.prototype.removeNode = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

function DoubleLinkedNode(value) {
  this.keys = new Set();
  this.value = value;
  this.next = null;
  this.prev = null;
}
