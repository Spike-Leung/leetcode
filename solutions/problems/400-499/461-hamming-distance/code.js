// https://leetcode.cn/problems/hamming-distance/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0
    // 异或，相同的位变成 0，不同的位变为 1
    let s = x ^ y

    while (s) {
        // 与操作，1 & 1 = 1， 0 & 1 = 0
        count += s & 1
        // 不断右移知道没有 1
        s >>= 1
    }

    return count
};
module.exports = hammingDistance
