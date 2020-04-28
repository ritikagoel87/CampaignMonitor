const positiveDivisors = require('../question2.js');

describe("positiveDivisors", () => {
	it('should return all the positive divisors of 60', () => {
		const expectedDivisors = [ 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 ];
		expect(positiveDivisors( 60 )).toEqual(expect.arrayContaining(expectedDivisors));
	});
	
	it('should return all the positive divisors of 42', () => {
		const expectedDivisors = [ 1, 2, 3, 6, 7, 14, 21, 42 ];
		expect(positiveDivisors( 42 )).toEqual(expect.arrayContaining(expectedDivisors));
	});
	
	it('should throw an "Input is not a number" error when input is not a valid number', () => {
		try {
			positiveDivisors("string");
		} catch (error) {
			expect(error.name).toBe("TypeError");
			expect(error.message).toBe("Input is not a number");
		}
	});
	
	it('should throw an "Input should be greater than or equal to 1" error when input is less than 1', () => {
		try {
			positiveDivisors(-60);
		} catch (error) {
			expect(error.name).toBe("RangeError");
			expect(error.message).toBe("Input should be greater than or equal to 1");
		}
	});
});
