// https://leetcode-cn.com/problems/stock-price-fluctuation/
/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
class Heap {
  constructor(compare) {
    this.container = [];
    this.compare = compare;
  }

  getLeftChild(parentIndex) {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }

  getRightChild(parentIndex) {
    return this.container[this.getRightChildIndex(parentIndex)];
  }

  getParent(childIndex) {
    return this.container[this.getParentIndex(childIndex)];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.container.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.container.length;
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  swap(index1, index2) {
    const temp = this.container[index1];
    this.container[index1] = this.container[index2];
    this.container[index2] = temp;
  }

  peak() {
    if (this.container.length === 0) {
      return null;
    }

    return this.container[0];
  }

  poll() {
    if (this.container.length === 0) {
      return null;
    }

    if (this.container.length === 1) {
      return this.container.pop();
    }

    const item = this.container[0];

    this.container[0] = this.container.pop();
    this.heapifyDown();

    return item;
  }

  add(item) {
    this.container.push(item);
    this.heapifyUp();
    return this;
  }

  remove(item) {
    const removeIndexes = this.find(item);

    for (let i = 0; i < removeIndexes.length; i++) {
      const removeIndex = this.find(item)[0];

      if (removeIndex === this.container.length - 1) {
        this.container.pop();
      } else {
        this.container[removeIndex] = this.container.pop();

        const parent = this.getParent(removeIndex);

        if (this.hasLeftChild(removeIndex) && (!parent || this.isPair(parent, this.container[removeIndex]))) {
          this.heapifyDown(removeIndex);
        } else {
          this.heapifyUp(removeIndex);
        }
      }
    }

    return this;
  }

  find(item, compare = this.compare) {
    const removeIndexes = [];

    this.container.forEach((i, index) => {
      if (this.compare(i, item)) {
        removeIndexes.push(index);
      }
    });

    return removeIndexes;
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.container.length - 1;

    while (
      this.hasParent(currentIndex) &&
      !this.isPair(this.getParent(currentIndex), this.container[currentIndex])
    ) {
      this.swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        !this.isPair(
          this.getLeftChild(currentIndex),
          this.getRightChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.isPair(this.container[currentIndex], this.container[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  isPair(item1, item2) {
    throw new Error("Should be implemented");
  }
}

class CurrentHeap extends Heap {
  isPair(item1, item2) {
    return item1[0] >= item2[0];
  }
}

class MaximumHeap extends Heap {
  isPair(item1, item2) {
    return item1[1] >= item2[1];
  }
}

class MinimumHeap extends Heap {
  isPair(item1, item2) {
    return item1[1] <= item2[1];
  }
}

var StockPrice = function () {
  const compare = (a, b) => a[0] === b[0];
  this.map = new Map();
  this.newestTime = null;
  this.maximumHeap = new MaximumHeap(compare);
  this.minimumHeap = new MinimumHeap(compare);
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.newestTime = Math.max(this.newestTime, timestamp);
  this.map.set(timestamp, price);
  this.maximumHeap.add([timestamp, price]);
  this.minimumHeap.add([timestamp, price]);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.map.get(this.newestTime);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  let [timestamp, price] = this.maximumHeap.peak();

  while (this.map.get(timestamp) !== price) {
    this.maximumHeap.poll();
    ([timestamp, price] = this.maximumHeap.peak());
  }

  return price;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  let [timestamp, price] = this.minimumHeap.peak();

  while (this.map.get(timestamp) !== price) {
    this.minimumHeap.poll();
    ([timestamp, price] = this.minimumHeap.peak());
  }

  return price;
};
