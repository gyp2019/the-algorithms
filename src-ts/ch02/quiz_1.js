"use strict";
exports.__esModule = true;
var Grades = /** @class */ (function () {
    function Grades() {
        this.grades = [];
    }
    Grades.prototype.add = function (grade) {
        this.grades.push(grade);
    };
    Grades.prototype.display = function () {
        var total = this.grades.reduce(function (acc, value) { return acc + value; });
        var students = this.grades.length;
        return students + " students, average: " + total / students;
    };
    return Grades;
}());
var grades = new Grades();
grades.add(78);
grades.add(88);
grades.add(91);
grades.add(82);
grades.add(85);
console.log(grades.display());
exports["default"] = Grades;
