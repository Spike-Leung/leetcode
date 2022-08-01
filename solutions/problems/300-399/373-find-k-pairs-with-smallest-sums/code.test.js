const kSmallestPairs = require("./code");

const nums1 = [1,7,11];
const nums2 = [2,4,6];
const k = 3;
const result = [[1,2], [1,4], [1,6]];
test(`${k} smallest pairs of ${nums1} & ${nums2} is ${result}`, () => {
  expect(kSmallestPairs(nums1, nums2, k).toString()).toBe(result.toString());
});

// const nums1a = [1,1,2];
// const nums2a = [1,2,3];
// const ka = 2;
// const resulta = [[1,1], [1,1]];
// test(`${k} smallest pairs of ${nums1a} & ${nums2a} is ${resulta}`, () => {
//   expect(kSmallestPairs(nums1a, nums2a, ka).toString()).toBe(resulta.toString());
// });
