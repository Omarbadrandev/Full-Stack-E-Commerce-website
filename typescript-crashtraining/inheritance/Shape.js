"use strict";
//An abstract class is a class that is declared abstract—it may or may not include abstract methods. Abstract classes cannot be instantiated, but they can be subclassed.
//An abstract method is a method that is declared without an implementation (without braces, and followed by a semicolon), like this://
//abstract void moveTo(double deltaX, double deltaY);
//If a class includes abstract methods, then the class itself must be declared abstract, as in:
//public abstract class GraphicObject {
// declare fields
// declare nonabstract methods
// abstract void draw();
//}
//When an abstract class is subclassed, the subclass usually provides implementations for all of the abstract methods in its parent class.
//However, if it does not, then the subclass must also be declared abstract.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
//cannot create instance of an abstract class
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "x=".concat(this._x, ", y=").concat(this._y);
    };
    return Shape;
}());
exports.Shape = Shape;
