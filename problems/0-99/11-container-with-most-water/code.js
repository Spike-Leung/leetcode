/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    maxArea = Math.max(maxArea, getArea(left, right, height[left], height[right]));
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

function getArea(left, right, leftHeight, rightHeight) {
  return (right - left) * Math.min(leftHeight, rightHeight);
}

module.exports = maxArea;
