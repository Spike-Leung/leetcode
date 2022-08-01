/**
 * 输入是两个一维数组，输出是一个一位二维数组
 * 要求：输出的数组内不应有重复的内容，并按照数字从小到大排序，
 * 数字尾数是4的被去除掉，并按照等长截为5个数组
 */
function merge(a1 = [], a2 = []) {
  const filterNumber = (num, filterNumber) => num % 10 !== filterNumber;
  const arrayWithoutLast4 = [
    ...a1.filter((n) => filterNumber(n, 4)),
    ...a2.filter((n) => filterNumber(n, 4)),
  ];
  const uniqueSortedArr = [...new Set(arrayWithoutLast4)].sort(
    (a, b) => a - b
  );
  const singleArrLength = Math.floor(uniqueSortedArr.length / 5);
  const result = [];
  let index = 0;

  while (index < uniqueSortedArr.length) {
    result.push(uniqueSortedArr.slice(index, index + singleArrLength));
    index += singleArrLength;
  }

  return result;
}

module.exports = merge;
