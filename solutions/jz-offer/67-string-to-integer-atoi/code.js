// https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
  if (str.length === 0) {
    return 0;
  }

  let index = 0;

  // remove prefix space
  while (str[index] === " ") {
    index++;
  }

  // 第一个字符不是有效数字则返回 0
  if (index >= str.length || !isValidChar(str[index])) {
    return 0;
  }

  let numbers = [];
  let sign = 1;

  // 第一个是符号位，则跳过，并设置符号
  if (isSign(str[index])) {
    str[index] === "-" && (sign = -1);
    index++;
  }

  // 统计连续的数字
  while (index < str.length && isValidNumber(str[index])) {
    numbers.push(str[index]);
    index++;
  }

  // 拼接数字
  const int = +numbers.join("") === 0 ? 0 : sign * (+numbers.join(""));
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = -Math.pow(2, 31);

  if (int > maxInt) {
    return maxInt;
  }

  if (int < minInt) {
    return minInt;
  }

  return int;
};

function isValidChar(char) {
  return isSign(char) || isValidNumber(char);
}

function isSign(char) {
  return char === "-" || char === "+";
}

function isValidNumber(char) {
  return char >= "0" && char <= "9";
}

module.exports = strToInt;
