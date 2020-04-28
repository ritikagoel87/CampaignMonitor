/*

4. Write a function that takes an array of integers, and returns an array of integers. The return value
should contain those integers which are most common in the input array.

*/

function getCommonIntegers( input ) {
	if ( input.length <= 0 ) {
  	throw new RangeError("Array should have 1 or more elements!");
  }
  
  let counterObject = {};
  
  input.forEach ((_, index) => {
    const currentItem = input[index];
  	if ( counterObject.hasOwnProperty(currentItem) ) {
    	counterObject[currentItem]++;
    } else {
    	counterObject[currentItem] = 1;
    }
  } )
  
  let arr = Object.values(counterObject);
  let max = Math.max(...arr);

  return Object.keys(counterObject).filter(key => counterObject[key] === max).map(value => parseInt(value, 10));
}

 module.exports = getCommonIntegers;