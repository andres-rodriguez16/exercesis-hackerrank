function gradingStudents(grades) {
  // Write your code here
  let result = []
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let modulo5 = grades[i] % 5
      if (modulo5 != 0) {
        let findMultripe = 5 - modulo5
        if (findMultripe < 3) {
          result.push(grades[i] + findMultripe)
        } else {
          result.push(grades[i])
        }
      } else {
        result.push(grades[i])
      }
    } else {
      result.push(grades[i])
    }
  }
  return result
}
  console.log(
    gradingStudents([99, 64, 38, 33])
  );