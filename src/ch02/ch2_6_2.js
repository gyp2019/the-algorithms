// const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
// let total = 0;
// let average = 0.0;
// for (let row = 0; row < grades.length; row += 1) {
//   for (let col = 0; col < grades[row].length; col += 1) {
//     total += grades[row][col];
//   }
//   average = total / grades[row].length;
//   console.log(`Student ${row + 1} average: ${average.toFixed(2)}`);
//   total = 0;
//   average = 0.0;
// }


// const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
// grades.forEach((studentGrades, row) => {
//   let total = 0;
//   let average = 0;
//   studentGrades.forEach(grade => {
//     total += grade;
//   });
//   average = total / studentGrades.length;
//   console.log(`Student ${row + 1} average: ${average.toFixed(2)}`);
// });


const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
let total = 0;
let average = 0.0;
for (let col = 0; col < grades.length; col += 1) {
  for (let row = 0; row < grades[col].length; row += 1) {
    total += grades[row][col];
  }
  average = total / grades[col].length;
  console.log(`Test ${col + 1} average: ${average.toFixed(2)}`);
  total = 0;
  average = 0.0;
}
