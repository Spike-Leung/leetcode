/**
 *
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 *
 * 数组模拟加法实现
 *
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  const results = [];
  const numberArr = Array.from({ length: n }).fill(0);
  let done = false;

  while (!done) {
    const number = increaseNumber(numberArr);

    if (number == -1) {
      done = true;
    } else {
      results.push(number);
    }
  }

  return results;
};

// 数组模拟加法
function increaseNumber(numberArr) {
  const length = numberArr.length;
  let carry = 0;

  for (let i = length - 1; i >= 0; i--) {
    // 对于每一位，加上进位（如果有的话）
    numberArr[i] = numberArr[i] + carry;

    // 个位加1
    if (i === length - 1) {
      numberArr[i]++;
    }

    // 进位
    if (numberArr[i] >= 10) {
      // 第一位进位，说明数字已经遍历结束
      if (i === 0) {
        return -1;
      }

      // 进位设置为１，表示有进位
      carry = 1;
      numberArr[i] = 0; // 进位后，当前位归零
      continue;
    }

    // 如果没有进位，就不需要继续遍历高位了
    break;
  }

  // 处理前置零
  const number = removePrefixZero(numberArr.join(""));
  return number;
}

function removePrefixZero(number) {
  let index = 0;

  while (number[index] === '0') {
    index++
  }

  return `${number}`.slice(index);
}

// console.log(printNumbers(2).toString()); // 1,2....99

module.exports = printNumbers;
