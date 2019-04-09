const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach((num) => {
  console.log(num, num * num);
});


const nums2 = [2, 4, 6, 8, 10];
const even = nums2.every((num) => num % 2 === 0);
if (even) {
  console.log('all numbers are even');
} else {
  console.log('not all numbers are even');
}


const nums3 = [1, 3, 5, 7, 9];
const someEven = nums3.some((num) => num % 2 === 0);
if (someEven) {
  console.log('some numbers are even');
} else {
  console.log('no numbers are even');
}


const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = nums4.reduce((runningTotal, currentValue) => runningTotal + currentValue);
console.log(sum);


const words = ['the ', 'quick ', 'brown ', 'fox '];
const sentence = words.reduce((accumulatedString, item) => accumulatedString + item);
console.log(sentence);


const words2 = ['the ', 'quick ', 'brown ', 'fox '];
const sentence2 = words2.reduceRight((accumulatedString, item) => accumulatedString + item);
console.log(sentence2);
