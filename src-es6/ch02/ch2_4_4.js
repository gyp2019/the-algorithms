const nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);


const names = ['David', 'Mike', 'Cynthia', 'Clayton', 'Bryan', 'Raymond'];
names.sort();
console.log(names);


const nums2 = [3, 1, 2, 100, 4, 200];
nums2.sort();
console.log(nums2);


const nums3 = [3, 1, 2, 100, 4, 200];
nums3.sort((num1, num2) => num1 - num2);
console.log(nums3);
