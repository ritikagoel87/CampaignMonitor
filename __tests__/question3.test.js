const areaOfTriangle = require('../question3.js');

describe("areaOfTriangle", () => {
	it('should return 6 when input is 3,4,5', () => {
		expect(areaOfTriangle(3, 4, 5)).toEqual(6);
	});
	
	test.each([
		[0,4,5],
		[4,0,5],
		[5,4,0]
	])("should throw an error when any of the side is 0 with input as %i,%i,%i", (sideA, sideB, sideC) => {
		try {
			areaOfTriangle(sideA, sideB, sideC);
		} catch (error) {
			expect(error.name).toBe("InvalidTriangleException");
			expect(error.message).toBe('Sides of Triangle should be greater than 0!');
		}
	})

	test.each([
		[-1,4,5],
		[4,-1,5],
		[5,4,-1]
	])("should throw an error when any of the side is negative with input as %i,%i,%i", (sideA, sideB, sideC) => {
		try {
			areaOfTriangle(sideA, sideB, sideC);
		} catch (error) {
			expect(error.name).toBe("InvalidTriangleException");
			expect(error.message).toBe('Sides of Triangle should be greater than 0!');
		}
	})

	it('should throw an error when the sides do not form a valid triangle: 2, 4 and 7', () => {
		try {
			areaOfTriangle(2, 4, 7);
		} catch (error) {
			expect(error.name).toBe("InvalidTriangleException");
			expect(error.message).toBe("Inputs cannot form a valid Triangle!");
		}
	});
})


