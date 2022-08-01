function quickSortInPlaceII(array) {
  if (array.length <= 1) {
    return array;
  }

  return quickSort(array);
}

function quickSort(array, lowIndex = 0, highIndex = array.length - 1) {
  if (lowIndex >= highIndex) {
    return array;
  }

  const swap = (leftIndex, rightIndex) => {
    const temp = array[leftIndex];

    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  };

  let l = lowIndex;
  let r = highIndex;
  const pivot = array[lowIndex];

  while (l < r) {
    // 从右边一直遍历，找到小于 pivot 的数, 要先遍历右边，把所有大的数排除，从而找到分割点
    // 如果先遍历左边，l 最终指向的可能不是分割点，而是分割点后一个元素
    while (l < r && array[r] >= pivot) {
      r--;
    }
    // 从左边一直遍历，找到大于 pivot 的数
    while (l < r && array[l] <= pivot) {
      l++;
    }
    // 交换
    swap(l, r);
  }

  swap(lowIndex, l);

  quickSort(array, lowIndex, l - 1);
  quickSort(array, l + 1, highIndex);

  return array;
}

module.exports = quickSortInPlaceII;
