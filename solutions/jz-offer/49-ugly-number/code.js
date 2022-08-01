/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const uglyNumberArr = [1];
  let n2Pointer = 0;
  let n3Pointer = 0;
  let n5Pointer = 0;

  for (let i = 1; i <= n; i++) {
    const n2 = uglyNumberArr[n2Pointer] * 2;
    const n3 = uglyNumberArr[n3Pointer] * 3;
    const n5 = uglyNumberArr[n5Pointer] * 5;

    uglyNumberArr[i] = Math.min(n2, n3, n5);

    if (uglyNumberArr[i] === n2) { n2Pointer++; }
    if (uglyNumberArr[i] === n3) { n3Pointer++; }
    if (uglyNumberArr[i] === n5) { n5Pointer++; }
  }

  return uglyNumberArr[n - 1];
};

module.exports = nthUglyNumber;
