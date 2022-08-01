// https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let n = bits.length;
  let index = n - 2;

  while (index >= 0 && bits[index]) {
    index--;
  }

  return ((n - index) & 1) === 0;
};

module.exports = isOneBitCharacter;
