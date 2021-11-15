const quickSort = require("./code");

test("[5,3,2,7,1,3] should sort to [1,2,3,3,5,7]", () => {
  expect(quickSort([5,3,2,7,1,3]).toString()).toBe([1,2,3,3,5,7].toString());
});
