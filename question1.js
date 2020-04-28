/*

1. Using the most appropriate means, implement an "isNullOrEmpty" check on the standard String type.
It should be functionally equivalent without calling any "isNullOrEmpty" built in function.

*/

function isNullOrEmptyCheck( input ) {
	// There are 8 falsy values in Javascript -
	// false, 0, -0, 0n, "", null, undefined, NaN
	// which includes null and empty strings
	// Negating these falsy inputs would return a Boolean true
	return !input;

	/**
	 * If we just want null and empty to return true and the rest to return false -
	 * if ( input === null || input === "" ) {
	 * 	return true;
	 * }
	 * return false;
	 */
}

 module.exports = isNullOrEmptyCheck;