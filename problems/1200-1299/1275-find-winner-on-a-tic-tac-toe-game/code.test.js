const tictactoe = require("./code");

test("moves = [[0,0],[2,0],[1,1],[2,1],[2,2]] output = 'A'", () => {
  const moves = [[0,0],[2,0],[1,1],[2,1],[2,2]];

  expect(tictactoe(moves)).toBe("A");
});

test("moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]] output = 'B'", () => {
  const moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]];

  expect(tictactoe(moves)).toBe("B");
})

test("moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]] output = 'Draw'", () => {
  const moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]];

  expect(tictactoe(moves)).toBe("Draw");
});

test("moves = [[0,0],[1,1]] output = 'Pending'", () => {
  const moves = [[0,0],[1,1]]

  expect(tictactoe(moves)).toBe("Pending");
});
