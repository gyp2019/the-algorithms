const nums = [1, 2, 3, 7, 8, 9];
const newElements = [4, 5, 6];
nums.splice(3, 0, newElements);
console.log(nums);


const nums2 = [1, 2, 3, 7, 8, 9];
nums2.splice(3, 0, 4, 5, 6);
console.log(nums2);


const nums3 = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums3.splice(3, 4);
console.log(nums3);
