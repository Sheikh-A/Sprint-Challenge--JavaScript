// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

 // == Step 1: Base Constructor ==
 //  Create a constructor function named CuboidMaker that accepts properties for length, width, and height

class CuboidMakers {
  constructor(attrs) {
  this.length = attrs.length;
  this.width = attrs.width;
  this.height = attrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMakers extends CuboidMakers {
  constructor(cubeAttrs) {
    super(cubeAttrs);
    this.cubeSize = cubeAttrs.cubeSize
  }
  cubeSurfaceArea() {
    return (6 * math.pow(this.length,2));
  }
}

// /* == Step 2: Volume Method ==
//   Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
//   Formula for cuboid volume: length * width * height
// */
//
// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };
//
//
// /* == Step 3: Surface Area Method ==
//   Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height.
//   Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
// */
//
// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// };
//
// /* == Step 4: Create a new object that uses CuboidMaker ==
//   Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
//   Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
// */
//
const cuboidTwo = new CuboidMakers({
  length: 4,
  width: 5,
  height: 5
})

const cubeTwo = new CubeMakers({
  length: 8,
  width: 8,
  height: 8
})

console.log(cuboidTwo.volume());
console.log(cuboidTwo.surfaceArea());


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130


console.log(cubeTwo.volume()); // 100
console.log(cubeTwo.surfaceArea()); // 130
