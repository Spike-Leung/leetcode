// https://leetcode-cn.com/problems/lru-cache/
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  // 记录链表长度
  this.size = 0;
  this.cache = {};
  this.head = new DoubleLinked();
  this.tail = new DoubleLinked();

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.cache[key];

  if (node) {
    this.moveToHead(node);
    return node.value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.cache[key];

  if (node) {
    node.value = value;
    this.moveToHead(node);
  } else {
    const nNode = new DoubleLinked(key, value);
    this.addToHead(nNode);
    this.cache[key] = nNode;
    this.size++;

    if (this.size > this.capacity) {
      const tailNode = this.removeTail();
      Reflect.deleteProperty(this.cache, tailNode.key);
      this.size--;
    }
  }
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
};

LRUCache.prototype.addToHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next = node;
  node.next.prev = node;
};

LRUCache.prototype.removeNode = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.removeTail = function() {
  const tail = this.tail.prev;

  this.removeNode(tail);

  return tail;
};

function DoubleLinked(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
