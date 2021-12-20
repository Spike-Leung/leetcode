/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  if (a.length === 0) {
    return [];
  }

  const productArr = [];

  productArr[0] = 1;

  for (let i = 1; i < a.length; i++) {
    productArr[i] = a[i - 1] * productArr[i - 1];
  }

  let temp = 1;
  for (let i = a.length - 2; i >= 0; i--) {
    temp *= a[i + 1];
    productArr[i] *= temp;
  }

  return productArr;
};

module.exports = constructArr;
