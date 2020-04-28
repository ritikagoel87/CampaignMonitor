/*

3. Write a function that takes three integer inputs and returns a single output. The inputs are the lengths
of the sides of a triangle. The output is the area of that triangle.

*/

const InvalidTriangleException = require("./customExceptions.js");

function areaOfTriangle( sideA, sideB, sideC ) {
  if ( sideA < 1 || sideB < 1 || sideC < 1 ) {
    throw new InvalidTriangleException("Sides of Triangle should be greater than 0!");
  }
  
  // Sum of any 2 sides of a triangle, at any given time,
  // must always be greater than the third side to make it a valid triangle.
  if ( sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB ) {
    throw new InvalidTriangleException("Inputs cannot form a valid Triangle!");
  }
  
  // Using Heron's formula - Reference: https://www.mathopenref.com/heronsformula.html
  const p = ( sideA + sideB + sideC ) / 2;
  return Math.sqrt( (p-sideA) * (p-sideB) * (p-sideC) * p);
}

module.exports = areaOfTriangle;