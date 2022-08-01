// https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/

class Heap {
  constructor(comparatorFunction) {
    this.heapContainer = [];
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

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = temp;
  }

  peak() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

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

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  isEmpty() {
    return this.heapContainer.length === 0;
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(
        this.parent(currentIndex),
        this.heapContainer[currentIndex]
      )
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
        this.pairIsInCorrectOrder(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  pairIsInCorrectOrder(first, second) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  class MinHeap extends Heap {
    pairIsInCorrectOrder(first, second) {
      return (nums1[first[0]] + nums2[first[1]]) <= (nums1[second[0]] + nums2[second[1]]);
    }
  }
  const minHeap = new MinHeap();
  const ans = [];
  const n1 = nums1.length;
  const n2 = nums2.length;

  for (let i = 0; i < Math.min(n1, k); i++) {
    minHeap.add([i, 0]);
  }

  while (k > 0 && !minHeap.isEmpty()) {
    const [index1, index2] = minHeap.poll();
    ans.push([nums1[index1], nums2[index2]]);

    if (index2 + 1 < n2) {
      minHeap.add([index1, index2 + 1]);
    }

    k--;
  }

  return ans;
};

module.exports = kSmallestPairs;
