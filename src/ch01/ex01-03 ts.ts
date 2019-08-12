let mid: number = 25;
const high: number = 50;
const low: number = 1;
var current: number = 13;
let found: number = -1;

if (current < mid) {
  mid = (current - low) / 2;
}
else {
  mid = (current + high) / 2;
}

console.log(mid); // 6
