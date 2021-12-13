// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  const count = { sum: 0 };

  mergeSort(nums, count);

  return count.sum;
};

function mergeSort(nums, count) {
  if (nums.length <= 1) {
    return nums;
  }

  const midIndex = Math.floor(nums.length / 2);
  const leftArr = mergeSort(nums.slice(0, midIndex), count);
  const rightArr = mergeSort(nums.slice(midIndex), count);


  return mergeSortedArrays(leftArr, rightArr, count);
}

function mergeSortedArrays(leftArr, rightArr, count) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArray = [];

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftVal = leftArr[leftIndex];
    const rightVal = rightArr[rightIndex];

    if (rightVal >= leftVal) {
      sortedArray.push(leftVal);
      leftIndex++;
    } else {
      count.sum += leftArr.length - leftIndex;
      sortedArray.push(rightVal);
      rightIndex++;
    }
  }

  return sortedArray.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

module.exports = reversePairs;
