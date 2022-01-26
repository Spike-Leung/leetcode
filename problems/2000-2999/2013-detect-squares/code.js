// https://leetcode-cn.com/problems/detect-squares/
/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
var DetectSquares = function() {
  this.map = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
  const [x, y] = point;

  if (!this.map.get(x)) {
    this.map.set(x, new Map());
  }

  const yCnt = this.map.get(x).get(y) || 0;
  this.map.get(x).set(y, yCnt + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
  let res = 0;
  const [x, y] = point;
  const yMap = this.map.get(x);

  if (!yMap) {
    return 0;
  }

  const entries = this.map.entries();
  for (const [xNew, yMapNew] of entries) {
    if (xNew !== x) {
      const d = xNew - x;
      res += (yMap.get(y + d) || 0) * (yMapNew.get(y) || 0) * (yMapNew.get(y + d) || 0);
      res += (yMap.get(y - d) || 0) * (yMapNew.get(y) || 0) * (yMapNew.get(y - d) || 0);
    }
  }

  return res;
};
