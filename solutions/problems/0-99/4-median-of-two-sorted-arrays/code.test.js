const findMedianSortedArrays = require("./code");

test("nums1 = [1,3], nums2 = [2] output: 2.00000", () => {
  const nums1 = [1,3], nums2 = [2];

  expect(findMedianSortedArrays(nums1, nums2)).toBe(2.00000);
});

test("nums1 = [1, 2], nums2 = [3, 4] output: 2.50000", () => {
  const nums1 = [1,2], nums2 = [3, 4];

  expect(findMedianSortedArrays(nums1, nums2)).toBe(2.50000);
});

test("nums1 = [0, 0], nums2 = [0, 0] output: 0.00000", () => {
  const nums1 = [0, 0], nums2 = [0, 0];

  expect(findMedianSortedArrays(nums1, nums2)).toBe(0.00000);
});


test("nums1 = [], nums2 = [1] output: 1.00000", () => {
  const nums1 = [], nums2 = [1];

  expect(findMedianSortedArrays(nums1, nums2)).toBe(1.00000);
});
