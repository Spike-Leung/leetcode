const isNStraightHand = require("./code");

const hand = [1,2,3,6,2,3,4,7,8];
const groupSize = 3;
test(`${hand} can divide to ${groupSize} groups of straights`, () => {
  expect(isNStraightHand(hand, groupSize)).toBe(true);
});

// const hand1 = [1,2,3,4,5];
// const groupSize1 = 4;
// test(`${hand1} can NOT divide to ${groupSize1} groups of straights`, () => {
//   expect(isNStraightHand(hand1, groupSize1)).toBe(false);
// });
