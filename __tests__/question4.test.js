const getCommonIntegers = require('../question4.js');

describe("getCommonIntegers", () => {
	test.each([
		[[ 5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4 ], [ 4, 5 ]],
		[[ 1, 2, 3, 4, 5, 1, 6, 7 ], [ 1 ]],
		[[ 1, 2, 3, 4, 5, 6, 7 ], [ 1, 2, 3, 4, 5, 6, 7 ]],
		[[ -1, -2, 3, 4, 5, 6, 7, -1, -2 ], [ -1, -2 ]]
	])('should find the most common integers in an array', (input, expected) => {
		expect(getCommonIntegers(input)).toEqual(expect.arrayContaining(expected));
	});
	
	it('should return an error when input is an empty array', () => {
		const input = [ ];
		try {
			getCommonIntegers(input);
		} catch (error) {
			expect(error.name).toBe("RangeError");
			expect(error.message).toBe("Array should have 1 or more elements!");
		}
	});
})
