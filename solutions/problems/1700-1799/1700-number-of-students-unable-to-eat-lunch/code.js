// https://leetcode.cn/problems/number-of-students-unable-to-eat-lunch/
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let reorderCount = 0

  while (students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
      reorderCount = 0
    } else {
      students.push(students.shift())
      reorderCount++

      if (reorderCount === sandwiches.length) {
        break
      }
    }
  }

  return students.length
};
module.exports = countStudents
