const twod = [];
const rows = 5;
for (let i = 0; i < rows; ++i) {
  twod[i] = [];
}
console.log(twod);


Array.marix = function(numrows, numcols, initial) {
  const arr = [];
  for (let i = 0; i < numrows; ++i) {
    const columns = [];
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}
const nums = Array.marix(5, 5, 1);
console.log(nums[1][1]);
const names = Array.marix(3, 3, '');
names[1][2] = 'Joe';
console.log(names[1][2]);


const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
console.log(grades[2][2]);
