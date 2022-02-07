// https://leetcode-cn.com/problems/longest-happy-string/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const res = [];
  const arr = [[a, 'a'], [b, 'b'], [c, 'c']];

  while (true) {
    let hasNext = false;
    arr.sort((a, b) => b[0] - a[0]);

    for (const [i, [count, ch]] of arr.entries()) {
      if (count <= 0) {
        break;
      }

      const n = res.length;

      if (n >= 2 && res[n - 2] === ch && res[n - 1] === ch) {
        continue;
      }

      hasNext = true;
      arr[i][0]--;
      res.push(ch);
      break;
    }


    if (!hasNext) {
      break;
    }
  }

  return res.join("");
};

module.exports = longestDiverseString;
