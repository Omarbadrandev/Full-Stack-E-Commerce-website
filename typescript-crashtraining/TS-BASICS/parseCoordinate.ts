//example of function Overloading
interface Coordinate {
  x: number;
  y: number;
}

// (obj: Coordinate): Coordinat : variance
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;
// unknow is kind of safe any but you have to cast it before you use it
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0
  };

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      //  radix: is A value between 2 and 36 that specifies the base of the number in string.
      //  If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
      //  All other strings are considered decimal.
      //  The parseInt() function parses a string argument and
      //  returns an integer of the specified radix (the base in mathematical numeral systems).
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate)
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg1 as number
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:120,y:220"));
