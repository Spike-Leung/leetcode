const mergeSort = require("./code");

test("[5,3,2,7,1,3,4] should sort to [1,2,3,3,4,5,7]", () => {
  expect(mergeSort([5,3,2,7,1,3,4]).toString()).toBe([1,2,3,3,4,5,7].toString());
});
