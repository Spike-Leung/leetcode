// https://leetcode-cn.com/problems/maximize-the-confusion-of-an-exam/
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  return Math.max(
    findMaxConsecutive(answerKey, k, "F"),
    findMaxConsecutive(answerKey, k, "T")
  );
};

function findMaxConsecutive(answerKey, k, c) {
  const n = answerKey.length;
  let maxLen = 0;

  for (let l = 0, r = 0, cnt = 0; r < n; r++) {
    cnt += answerKey[r] === c ? 1 : 0;

    while (cnt > k) {
      cnt -= answerKey[l++] === c ? 1 : 0;
    }

    maxLen = Math.max(maxLen, r - l + 1);
  }

  return maxLen;
}
module.exports = maxConsecutiveAnswers;
