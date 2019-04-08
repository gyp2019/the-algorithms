const nums = [];
for (let i = 0; i < 100; ++i) {
  nums[i] = i + 1;
}
console.log(nums.length);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers[0]
          + numbers[1]
          + numbers[2]
          + numbers[3]
          + numbers[4];
console.log(sum);

const numbers2 = [1, 2, 3, 5, 8, 13, 21];
let sum2 = 0;
for (let i = 0; i < numbers2.length; ++i) {
  sum2 += numbers2[i];
}
console.log(sum2);
