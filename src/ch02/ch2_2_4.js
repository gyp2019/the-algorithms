const nums = [];
for (let i = 0; i < 10; ++i) {
  nums[i] = i + 1;
}
const samenums = nums;
nums[0] = 400;
console.log(samenums[0]);

function copy(arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i];
  }
}

const nums2 = [];
for (let i = 0; i < 10; ++i) {
  nums2[i] = i + 1;
}
const samenums2 = [];
copy(nums2, samenums2);
nums2[0] = 400;
console.log(samenums2[0]);

const nums3 = [];
for (let i = 0; i < 10; ++i) {
  nums3[i] = i + 1;
}
const samenums3 = [...nums3];
console.log(samenums3);

const nums4 = [1, 2, 3, 4, 5];
console.log(nums4);
