// https://leetcode-cn.com/problems/gray-code/
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let head = 1;
  let codes = [0];

  for (let i = 1; i <= n; i++) {
    for (let j = codes.length - 1; j >= 0; j--) {
      codes.push(codes[j] + head);
    }

    head <<= 1;
  }

  return codes;
};

module.exports = grayCode;
