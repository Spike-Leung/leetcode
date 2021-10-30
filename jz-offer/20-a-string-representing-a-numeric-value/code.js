/**
 * https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
 *
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let isNumeric = false;
  let index = 0;

  if (s.length === 0) {
    return false;
  }

  // 处理前面空格
  while (s[index] === " ") {
    index++;
  }

  // 处理整数部分
  ({
    index,
    isInteger: isNumeric
  } = scanInterger(s, index));

  // 处理小数
  if (s[index] === ".") {
    index++;

    const {
      index: newIndex,
      isInteger,
    } = scanUnsignInteger(s, index);

    isNumeric = isNumeric || isInteger;
    index = newIndex;
  }

  // 处理指数
  if (s[index] === "e" || s[index] === "E") {
    index++;

    const {
      index: newIndex,
      isInteger,
    } = scanInterger(s, index);

    isNumeric = isNumeric && isInteger;
    index = newIndex;
  }

  // 处理后面的空格
  while (s[index] === " ") {
    index++;
  }

  return index === s.length ? isNumeric : false;
};

function scanUnsignInteger(s, index) {
  let newIndex = index;

  while (index <= s.length && s[newIndex] >= '0' && s[newIndex] <= '9') {
    newIndex++;
  }

  return {
    isInteger: newIndex > index,
    index: newIndex
  };
}

function scanInterger(s, index) {
  let newIndex = index;

  if (s[newIndex] === '+' || s[newIndex] === '-') {
    newIndex++;
  }

  return scanUnsignInteger(s, newIndex);
}

module.exports = isNumber;
