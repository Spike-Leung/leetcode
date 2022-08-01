const winnerOfGame = require("./code");

const colors = "AAABABB";
const aliceIsWinner = true;
test(`Colors: ${colors}, ${aliceIsWinner ? "Alice" : "Bob"} is winner`, () => {
  expect(winnerOfGame(colors)).toBe(aliceIsWinner);
});

const colors1 = "AA";
const aliceIsWinner1 = false;
test(`Colors: ${colors1}, ${aliceIsWinner1 ? "Alice" : "Bob"} is winner`, () => {
  expect(winnerOfGame(colors1)).toBe(aliceIsWinner1);
});

const colors2 = "ABBBBBBBAAA";
const aliceIsWinner2 = false;
test(`Colors: ${colors2}, ${aliceIsWinner2 ? "Alice" : "Bob"} is winner`, () => {
  expect(winnerOfGame(colors2)).toBe(aliceIsWinner2);
});
