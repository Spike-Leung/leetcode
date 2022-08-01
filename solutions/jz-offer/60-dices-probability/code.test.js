const dicesProbability = require("./code");

const diceCounts = 1;
const probability = [0.16667, 0.16667, 0.16667, 0.16667, 0.16667, 0.16667];
test(`${diceCounts} dices probability are ${probability}`, () => {
  expect(dicesProbability(diceCounts)).toEqual(probability);
});

const diceCounts1 = 2;
const probability1 = [
  0.02778, 0.05556, 0.08333, 0.11111, 0.13889, 0.16667, 0.13889, 0.11111,
  0.08333, 0.05556, 0.02778,
];
test(`${diceCounts1} dices probability are ${probability1}`, () => {
  expect(dicesProbability(diceCounts1)).toEqual(probability1);
});
