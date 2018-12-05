"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this._isSelected === true
            ? this._likesCount--
            : this._likesCount++;
        this._isSelected = !this._isSelected;
    };
    LikeComponent.prototype.likesCount = function () {
        return this._likesCount;
    };
    LikeComponent.prototype.isSelected = function () {
        return this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
