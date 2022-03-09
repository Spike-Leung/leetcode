const corpFlightBookings = require("./code");

const bookings = [[1,2,10],[2,3,20],[2,5,25]];
const n = 5;
const res = [10,55,45,25,25];
test(`bookings: ${bookings}, n: ${n}, res: ${res}`, () => {
  expect(corpFlightBookings(bookings, n)).toEqual(res);
});

const bookings1 = [[1,2,10],[2,2,15]];
const n1 = 2;
const res1 = [10,25];
test(`bookings: ${bookings1}, n: ${n1}, res: ${res1}`, () => {
  expect(corpFlightBookings(bookings1, n1)).toEqual(res1);
});
