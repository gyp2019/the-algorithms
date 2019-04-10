"use strict";
exports.__esModule = true;
var MonthTemps = /** @class */ (function () {
    function MonthTemps() {
        this.store = [];
    }
    MonthTemps.prototype.add = function (week) {
        this.store.push(week);
    };
    MonthTemps.prototype.averageWeek = function (index) {
        var week = this.store[index - 1];
        var total = week.reduce(function (acc, value) { return acc + value; });
        return total / week.length;
    };
    MonthTemps.prototype.averageMonth = function () {
        var _this = this;
        var total = 0;
        this.store.forEach(function (week, index) {
            total += _this.averageWeek(index + 1);
        });
        return total / this.store.length;
    };
    return MonthTemps;
}());
var month = new MonthTemps();
month.add([52, 55, 61, 65, 55, 50, 52]);
month.add([49, 51, 55, 61, 65, 69, 71]);
month.add([64, 61, 61, 62, 57, 56, 54]);
month.add([54, 54, 56, 58, 55, 58, 61]);
console.log(month.averageWeek(1));
console.log(month.averageWeek(2));
console.log(month.averageWeek(3));
console.log(month.averageWeek(4));
console.log(month.averageMonth());
exports["default"] = MonthTemps;
