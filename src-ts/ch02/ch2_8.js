"use strict";
exports.__esModule = true;
var WeekTemps = /** @class */ (function () {
    function WeekTemps() {
        this.dataStore = [];
    }
    WeekTemps.prototype.add = function (temp) {
        this.dataStore.push(temp);
    };
    WeekTemps.prototype.average = function () {
        var total = this.dataStore.reduce(function (acc, value) { return acc + value; });
        return total / this.dataStore.length;
    };
    return WeekTemps;
}());
var thisWeek = new WeekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());
exports["default"] = WeekTemps;
