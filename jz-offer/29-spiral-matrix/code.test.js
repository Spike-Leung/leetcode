const spiralOrder = require("./code");

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const output = [1,2,3,6,9,8,7,4,5];
test(`spiral order of ${matrix} is ${output}`, () => {
  expect(spiralOrder(matrix)).toEqual(output);
});

const matrix1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
const output1 = [1,2,3,4,8,12,11,10,9,5,6,7];
test(`spiral order of ${matrix1} is ${output1}`, () => {
  expect(spiralOrder(matrix1)).toEqual(output1);
});

const matrix2 = [[1]];
const output2 = [1];
test(`spiral order of ${matrix2} is ${output2}`, () => {
  expect(spiralOrder(matrix2)).toEqual(output2);
});
