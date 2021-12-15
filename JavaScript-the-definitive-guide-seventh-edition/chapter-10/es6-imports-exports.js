export const PI = Math.PI;

export function degreesToRadians(d) { return d * PI / 180; }

export class Circle {
  constructor(r) {
    this.r = r;
  }
  area() {
    return PI * this.r * this.r;
  }
}

//You can also export these together
//export { Circle, degreesToRadians, PI };


//when only one export in one file use default
export default class BitSet {
  //
}

//it is not a good practice to mix export default and export in one file.


//when import from a module that defines many exports you can easily import like this:
import * as stats from "./stats.js"