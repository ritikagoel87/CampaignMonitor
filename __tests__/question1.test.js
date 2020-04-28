const isNullOrEmptyCheck = require('../question1.js');

describe("isNullOrEmptyCheck", () => {
	it('should return true when input is null', () => {
		expect(isNullOrEmptyCheck(null)).toBe(true);
	});
	
	it('should return false when input is a valid string', () => {
		expect(isNullOrEmptyCheck("valid")).toBe(false);
	});
	
	it('should return true when input is an empty string', () => {
		expect(isNullOrEmptyCheck("")).toBe(true);
	});
	
	it('should return true when input is not given', () => {
		expect(isNullOrEmptyCheck()).toBe(true);
	});
});
