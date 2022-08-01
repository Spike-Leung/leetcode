// https://leetcode-cn.com/problems/utf-8-validation/
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  const n = data.length;

  for (let i = 0; i < data.length; i++) {
    const count = getByteCount(data[i]);

    if (count === 1 || count > 4) {
      return false;
    }

    if (count > 1) {
      let partialCount = count - 1;

      while (partialCount) {
        if (!isBytePartial(data[++i])) {
          return false;
        }
        partialCount--;
      }
    }
  }

  return true;
};

function isBytePartial(num) {
  let mask1 = 1 << 7;
  let mask2 = 1 << 6;

  return num & mask1 && !(num & mask2);
}

function getByteCount(num) {
  let mask = 1 << 7;
  let count = 0;

  while (mask & num) {
    count++;
    mask >>= 1;
  }

  return count;
}

module.exports = validUtf8;
