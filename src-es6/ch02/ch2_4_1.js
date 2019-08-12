const nums = [1, 2, 3, 4, 5];
console.log(nums);

nums.push(6);
console.log(nums);


const nums2 = [1, 2, 3, 4, 5];
console.log(nums2);

nums2[nums2.length] = 6;
console.log(nums2);


const nums3 = [2, 3, 4, 5];
const newnum = 1;
const n = nums3.length;
for (let i = n; i >= 0; --i) {
  nums3[i] = nums3[i - 1];
}
nums3[0] = newnum;
console.log(nums3);


const nums4 = [2, 3, 4, 5];
console.log(nums4);
const newnum2 = 1;
nums4.unshift(newnum2);
console.log(nums4);

const nums5 = [3, 4, 5];
nums5.unshift(newnum2, 2);
console.log(nums5);
