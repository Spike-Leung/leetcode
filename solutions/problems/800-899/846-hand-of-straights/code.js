// https://leetcode-cn.com/problems/hand-of-straights/
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  if (groupSize < 2) {
    return true;
  }

  const sortHand = hand.sort((a, b) => a - b);
  const handMap = {};

  sortHand.forEach((h) => {
    handMap[h] !== undefined ? handMap[h]++ : (handMap[h] = 1);
  });

  for (let i = 0; i < sortHand.length; i++) {
    const currentNum = sortHand[i];
    if (handMap[currentNum] !== undefined) {
      handMap[currentNum]--;

      if (handMap[currentNum] === 0) {
        delete handMap[currentNum];
      }

      for (let j = 1; j < groupSize; j++) {
        const nextNum = sortHand[i] + j;

        if (handMap[nextNum] === undefined) {
          return false;
        }

        handMap[nextNum]--;

        if (handMap[nextNum] === 0) {
          delete handMap[nextNum];
        }
      }
    }
  }

  return true;
};

module.exports = isNStraightHand;
