const arrangeBy = require('../question7.js');

describe("arrangeBy", () => {
	it("should create an object with the key 'name'", () => {
		const users = [{
			id: 1,
			name: 'bob',
		  }, {
			id: 2,
			name: 'sally',
		  }, {
			id: 3,
			name: 'bob',
			age: 30,
		}];
	
		const result = {
			bob: [{
					id: 1,
					name: 'bob',
				},
				{
					id: 3,
					name: 'bob',
					age: 30,
				}
			],
			sally: [{
				id: 2,
				name: 'sally',
			}]
		};
		
		const arrangeByName = arrangeBy('name');
		expect(arrangeByName(users)).toMatchObject(result);
	});
	
	it("should create an object with the key 'age'", () => {
		const users = [{
			id: 1,
			name: 'bob',
			age: 35,
		  }, {
			id: 2,
			name: 'john',
			age: 29
		  }, {
			id: 3,
			name: 'bob',
			age: 30,
		}];
	
		const result = {
			30: [{
				id: 3,
				name: 'bob',
				age: 30,
			}],
			35: [{
				id: 1,
				name: 'bob',
				age: 35,
			}],
			29: [{
				id: 2,
				name: 'john',
				age: 29,
			}],
		};
		
		const arrangeByName = arrangeBy('age');
		expect(arrangeByName(users)).toMatchObject(result);
	});

	it("should skip an object if it does not contain the input key 'age'", () => {
		const users = [{
			id: 1,
			name: 'bob',
			age: 35,
		  }, {
			id: 2,
			name: 'sally',
		  }, {
			id: 3,
			name: 'bob',
			age: 30,
		}];
	
		const result = {
			30: [{
				id: 3,
				name: 'bob',
				age: 30,
			}],
			35: [{
				id: 1,
				name: 'bob',
				age: 35,
			}],
		};
		
		const arrangeByName = arrangeBy('age');
		expect(arrangeByName(users)).toMatchObject(result);
	});
});
