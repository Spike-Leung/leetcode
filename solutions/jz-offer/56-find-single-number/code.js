/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let a = 0;
  let divideNum = 1;
  let singleNumX = 0;
  let singleNumY = 0;

  for (let i = 0; i < nums.length; i++) {
    a ^= nums[i];
  }

  while ((divideNum & a) === 0) {
    divideNum <<= 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & divideNum) === 0) {
      singleNumX ^= nums[i];
    } else {
      singleNumY ^= nums[i];
    }
  }

  return [singleNumX, singleNumY];
};

module.exports = singleNumbers;
