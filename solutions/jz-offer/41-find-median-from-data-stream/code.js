// https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.maxHeap = new Heap(maxHeapComparator);
  this.minHeap = new Heap(minHeapComparator);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.minHeap.size() === this.maxHeap.size()) {
    this.minHeap.insert(num);
    this.maxHeap.insert(this.minHeap.poll());
  } else {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const maxPeak = this.maxHeap.peak();
  const minPeak = this.minHeap.peak();

  if (this.maxHeap.size() === this.minHeap.size()) {
    return (maxPeak + minPeak) / 2;
  }

  return maxPeak;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

function maxHeapComparator(a, b) {
  return a >= b;
}

function minHeapComparator(a, b) {
  return a <= b;
}

class Heap {
  constructor(comparator) {
    this.heapContainer = [];
    this.compare = comparator;
  }

  size() {
    return this.heapContainer.length;
  }

  swap(firstElement, secondElement) {
    const temp = this.heapContainer[firstElement];
    this.heapContainer[firstElement] = this.heapContainer[secondElement];
    this.heapContainer[secondElement] = temp;
  }

  parent(childIndex) {
    return this.heapContainer[this.parentIndex(childIndex)];
  }

  parentIndex(childIndex) {
    return Math.ceil((childIndex - 2) / 2);
  }

  hasParent(childIndex) {
    return this.parentIndex(childIndex) >= 0;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.leftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.rightChildIndex(parentIndex)];
  }

  leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  hasLeftChild(parentIndex) {
    return this.leftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.rightChildIndex(parentIndex) < this.heapContainer.length;
  }

  // 插入
  insert(val) {
    // 插入到空缺的位置，然后向上冒泡到合适的位置
    this.heapContainer.push(val);
    this.heapifyUp();
    return this;
  }

  // 弹出顶部
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  }

  // 获取顶部
  peak() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    // 有父元素且位置不正确，则进行交换
    while (
      this.hasParent(currentIndex) &&
      !this.compare(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(this.parentIndex(currentIndex), currentIndex);
      currentIndex = this.parentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    // 如果有左节点，说明有子元素，那么是和左边交换还是右边交换?
    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.compare(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.rightChildIndex(currentIndex);
      } else {
        nextIndex = this.leftChildIndex(currentIndex);
      }

      if (
        this.compare(
          this.heapContainer[currentIndex],
          this.heapContainer[nextIndex]
        )
      ) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }
}
