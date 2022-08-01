// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let result = [];

  if (!matrix.length) {
    return result;
  }

  let left = 0;
  let top = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (left <= right && top <= bottom) {
    result = result.concat(spiral(matrix, left, right, top, bottom));
    left++;
    top++;
    bottom--;
    right--;
  }

  return result;
};

function spiral(matrix, left, right, top, bottom) {
  let result = [];
  let x = left;
  let y = top;

  if (left === right && top === bottom && left === top) {
    return [matrix[y][x]];
  }

  // to right
  if (x <= right) {
    while (x <= right) {
      result.push(matrix[y][x]);
      x++;
    }
    x--;
    y++;
  }

  // to bottom
  if (y <= bottom) {
    while (y <= bottom) {
      result.push(matrix[y][x]);
      y++;
    }
    x--;
    y--;
  } else {
    return result;
  }

  // to left
  if (x >= left) {
    while (x >= left) {
      result.push(matrix[y][x]);
      x--;
    }
    x++;
    y--;
  } else {
    return result;
  }

  // to top
  if (y > top) {
    while (y > top) {
      result.push(matrix[y][x]);
      y--;
    }
  }

  return result;
}

module.exports = spiralOrder;
