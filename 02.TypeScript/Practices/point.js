"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.getPoints = function () {
        console.log("X : " + this._x);
        console.log("Y : " + this._y);
    };
    return Point;
}());
exports.Point = Point;
