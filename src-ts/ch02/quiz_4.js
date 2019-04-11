"use strict";
exports.__esModule = true;
var WeekTemps = /** @class */ (function () {
    function WeekTemps() {
        this.weeks = [];
    }
    WeekTemps.prototype.add = function (week) {
        this.weeks.push(week);
    };
    WeekTemps.prototype.averageWeek = function (index) {
        var week = this.weeks[index];
        var total = 0;
        if (week) {
            total = week.reduce(function (acc, val) { return acc + val; });
            return total / week.length;
        }
        return total;
    };
    WeekTemps.prototype.averageMonth = function () {
        var _this = this;
        var total = 0;
        this.weeks.forEach(function (week, index) {
            total += _this.averageWeek(index);
        });
        return total / this.weeks.length;
    };
    return WeekTemps;
}());
var wt = new WeekTemps();
wt.add([52, 55, 61, 65, 55, 50, 52]);
wt.add([49, 51, 55, 61, 65, 69, 71]);
wt.add([64, 61, 61, 62, 57, 56, 54]);
wt.add([54, 54, 56, 58, 55, 58, 61]);
console.log(wt.averageWeek(0));
console.log(wt.averageWeek(1));
console.log(wt.averageWeek(2));
console.log(wt.averageWeek(3));
console.log(wt.averageMonth());
exports["default"] = WeekTemps;
