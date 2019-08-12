class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function displayPts(arr) {
  arr.forEach(el => {
    console.log(`${el.x}, ${el.y}`);
  });
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 5);
const p3 = new Point(2, 8);
const p4 = new Point(4, 4);
const points = [p1, p2, p3, p4];
points.forEach((point, i) => {
  console.log(`Point ${i + 1}: ${point.x}, ${point.y}`);
});

const p5 = new Point(12, -3);

points.push(p5);
console.log('After push: ');
displayPts(points);

points.shift();
console.log('After shift: ');
displayPts(points);
