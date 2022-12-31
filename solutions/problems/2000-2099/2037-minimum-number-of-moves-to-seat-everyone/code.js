// https://leetcode.cn/problems/minimum-number-of-moves-to-seat-everyone/
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  const sortSeats = seats.sort((a, b) => a - b)
  const sortStudents = students.sort((a, b) => a - b)

  return sortStudents.reduce((acc, cur, index) => {
    if (cur === sortSeats[index]) {
      return acc
    } else {
      acc += Math.abs(cur - sortSeats[index])
      return acc
    }
  }, 0)

};
module.exports = minMovesToSeat
