// https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[left % letters.length];
};

module.exports = nextGreatestLetter;
