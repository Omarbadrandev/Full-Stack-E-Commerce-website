import { Shape } from "./Shape";

export class Circle extends Shape {
  calculateArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
  //Parameter Property _radius
  //regular Parameter theX and theY
  constructor(theX: number, theY: number, private _radius: number) {
    //call superclass constructor
    super(theX, theY);
  }
  getInfo(): string {
    return super.getInfo() + `, radius=${this._radius}`;
  }
}
