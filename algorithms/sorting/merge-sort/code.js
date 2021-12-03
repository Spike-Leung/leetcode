function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midIndex = Math.floor((arr.length) / 2);
  const leftArr = mergeSort(arr.slice(0, midIndex));
  const rightArr = mergeSort(arr.slice(midIndex));

  return mergeSortedArrays(leftArr, rightArr);
}

function mergeSortedArrays(leftArr, rightArr) {
  let leftIndex = 0;
  let rightIndex = 0;
  const sortedArray = [];

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    let minElement;

    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      minElement = leftArr[leftIndex];
      leftIndex++;
    } else {
      minElement = rightArr[rightIndex];
      rightIndex++;
    }

    sortedArray.push(minElement);
  }

  return sortedArray.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

module.exports = mergeSort;
