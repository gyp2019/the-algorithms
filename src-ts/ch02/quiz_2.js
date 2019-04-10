"use strict";
exports.__esModule = true;
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.words = [];
    }
    Dictionary.prototype.add = function (word) {
        if (word.length < 0) {
            return;
        }
        this.words.push(word);
    };
    Dictionary.prototype.display = function () {
        return this.words.reduce(function (acc, value) { return acc + ', ' + value; });
    };
    Dictionary.prototype.reverse = function () {
        return this.words.reduceRight(function (acc, value) { return acc + ', ' + value; });
    };
    return Dictionary;
}());
var dic = new Dictionary();
dic.add('Java');
dic.add('Smalltalk');
dic.add('Python');
dic.add('JavaScript');
dic.add('Swift');
dic.add('ActionScript');
console.log(dic.display());
console.log(dic.reverse());
exports["default"] = Dictionary;
