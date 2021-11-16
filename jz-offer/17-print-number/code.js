/**
 *
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 *
 * 利用数列递归实现
 *
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    printNumbersRecursively(numbers, n, i, 0);
  }

  return numbers.slice(1);
};

function printNumbersRecursively(numbers, length, number, index) {
  if (index === length - 1) {
    numbers.push(removePrefixZero(number));
    return;
  }

  for (let i = 0; i < 10; i++) {
    printNumbersRecursively(numbers, length, `${number}${i}`, index + 1);
  }
}

function removePrefixZero(number) {
  let index = 0;

  while (number[index] === '0') {
    index++
  }

  return `${number}`.slice(index);
}

console.log(printNumbers(2).toString());

module.exports = printNumbers;
