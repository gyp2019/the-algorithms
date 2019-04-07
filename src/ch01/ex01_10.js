function curve(arr, amount) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}

const grades = [77, 73, 74, 81, 90];
curve(grades, 5);

console.log(grades);
