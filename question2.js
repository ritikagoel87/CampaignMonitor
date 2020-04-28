/*

2. Write a function that takes a single positive integer, and returns a collection / sequence (e.g. array) of
integers. The return value should contain those integers that are positive divisors of the input integer.

*/

function positiveDivisors( input ) {

	if(isNaN(input)) {
  	throw new TypeError("Input is not a number");
  }
  
  if( input < 1 ) {
  	throw new RangeError("Input should be greater than or equal to 1");
  }
  
	let divisors = [];
  
  for ( let i = 1; i <= input; i++ ) {
  	if ( input % i === 0 ) {
    	divisors.push(i);
    }
  }
  
  return divisors;
}

 module.exports = positiveDivisors;