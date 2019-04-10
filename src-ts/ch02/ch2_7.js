"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
function displayPts(points) {
    points.forEach(function (point) {
        console.log(point.x + ", " + point.y);
    });
}
var p1 = new Point(1, 2);
var p2 = new Point(3, 5);
var p3 = new Point(2, 8);
var p4 = new Point(4, 4);
var points = [p1, p2, p3, p4];
points.forEach(function (point, i) {
    console.log("Point " + (i + 1) + ": " + point.x + ", " + point.y);
});
var p5 = new Point(12, -3);
points.push(p5);
console.log('After push: ');
displayPts(points);
points.shift();
console.log('After shift: ');
displayPts(points);
exports["default"] = Point;
