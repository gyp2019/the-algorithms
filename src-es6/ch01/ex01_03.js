let mid = 25;
const high = 50;
const low = 1;
const current = 13;
let found = -1;

if (current < mid) {
  mid = (current - low) / 2;
} else {
  mid = (current + high) / 2;
}
