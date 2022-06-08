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

//cannot create instance of an abstract class
export abstract class Shape {
  constructor(private _x: number, private _y: number) {}

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }

  getInfo(): string {
    return `x=${this._x}, y=${this._y}`;
  }

  abstract calculateArea(): number;
}
