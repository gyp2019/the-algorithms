const grades = [77, 65, 81, 92, 83];
const newGrades = grades.map((grade) => grade += 5);
console.log(newGrades);


const words = ['for', 'your ', 'information'];
const acronym = words.map((word) => word[0]);
console.log(acronym.join(''));


const nums = [];
for (let i = 0; i < 20; ++i) {
  nums[i] = i + 1;
}
const evens = nums.filter(num => num % 2 === 0);
console.log('Even numbers: ');
console.log(evens);
const odds = nums.filter(num => num % 2 !== 0);
console.log('Odd numbers: ');
console.log(odds);


const grades2 = [];
for (let i = 0; i < 20; ++i) {
  grades2[i] = Math.floor(Math.random() * 101);
}
console.log('All grades: ');
console.log(grades2);
const passGrades = grades2.filter(num => num >= 60);
console.log('Passing Grades: ');
console.log(passGrades);


const words2 = ['recieve', 'deceive', 'percieve', 'concieve'];
const misspelled = words2.filter((str) => {
  if (str.indexOf('cie') > -1) {
    return true;
  }
  return false;
});
console.log(misspelled);
