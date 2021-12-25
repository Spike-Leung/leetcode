// https://leetcode-cn.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let result = 0;
  let index = 0;
  let sign = 1;

  while (index < s.length && s[index] === " ") {
    index++;
  }

  if (index < s.length && s[index] === "-" || s[index] === "+") {
    s[index] === "-" && (sign = -1);
    index++;
  }

  let nums = [];
  while (index < s.length && s[index] >= '0' && s[index] <= '9') {
    nums.push(s[index]);
    index++;
  }

  const number = +nums.join("");
  result = number === 0 ? 0 : sign * number;

  let maxInt = Math.pow(2, 31) - 1;
  let minInt = -Math.pow(2, 31);

  if (result > maxInt) {
    return maxInt;
  }

  if (result < minInt) {
    return minInt;
  }

  return result;
};


module.exports = myAtoi;
