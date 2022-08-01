function quickSortInPlace(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  return quickSort(arr);
}

// 会改变原数组，如果不想改变元素组，可以复制一次数组，但要增加一个标识符号
// 让递归的 quickSort 不要复制，而是传递引用改变数组
const quickSort = (array = [], lowIndex = 0, highIndex = array.length - 1) => {
  const partitionArray = (lowIndex, highIndex) => {
    const swap = (leftIndex, rightIndex) => {
      const temp = array[leftIndex];

      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
    };

    let partitionIndex = lowIndex;
    const pivot = array[highIndex];

    // partitionIndex 用来标记分割两个的下标，只有当找到小于 pivot 的数的时候才会移动
    // 相当于有多少个小于 pivot 的数，就会移动几次，从而达到标记分割点的作用
    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
      if (array[currentIndex] < pivot) {
        swap(partitionIndex, currentIndex);
        partitionIndex++;
      }
    }

    // 遍历结束时把分割点的值设置回 pivot，因为 pivot 才是用来分割的数字
    // pivot 小于等于 partitionIndex 对应的值
    swap(partitionIndex, highIndex);

    return partitionIndex;
  };

  if (lowIndex < highIndex) {
    const partitionIndex = partitionArray(lowIndex, highIndex);

    quickSort(array, lowIndex, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, highIndex);
  }

  return array;
};

module.exports = quickSortInPlace;
