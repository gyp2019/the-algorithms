const nums = [1, 2, 3, 4, 5, 9];
nums.pop();
console.log(nums);


const nums2 = [9, 1, 2, 3, 4, 5];
console.log(nums2);
for (let i = 0; i < nums2.length; ++i) {
  nums2[i] = nums2[i + 1];
}
console.log(nums2);


const nums3 = [9, 1, 2, 3, 4, 5];
nums3.shift();
console.log(nums3);


const nums4 = [6, 1, 2, 3, 4, 5];
const first = nums4.shift();
nums4.push(first);
console.log(nums4);
