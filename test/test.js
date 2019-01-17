const miniCJS = require('../src/index');
const assert = require('assert');
describe('minCJS', function() {
	it('should return string "test: null;"', function() {
		assert.equal(miniCJS({test: null}), 'test:null;');
	});
	it('should return "test:()=> {}"', function() {
		assert.equal(miniCJS({test: ()=> {}}), 'test:()=> {};')
	});
	it('should return ""', function() {
		assert.equal(miniCJS(), '');
	});
	it('should return ""', function() {
		assert.equal(miniCJS('string'), '');
	});
	it('should return ""', function() {
		assert.equal(miniCJS(15), '');
	});
	it('should return ""', function() {
		assert.equal(miniCJS([1, 2, 3, 4]), '');
	});
	it('should return \'.selector___abcd{border-color:red;}@media screen and (max-width: 992px){body{background-color:green;}}@media screen and (max-width: 768px){body{background-color:black;}}\'', function() {
		const maxWidth  = 992;
		const maxWidth2 = 768;
		const str = 'abcd'
		const CJS = {
			[`.selector___${str}`]: {
				'border-color': 'red'
			},
			media: [
				{
					[`@media screen and (max-width: ${maxWidth}px)`]: {
						body: {
							'background-color': 'green'
						}
					}
				},
				{
					[`@media screen and (max-width: ${maxWidth2}px)`]: {
						body: {
							'background-color': 'black'
						}
					}
				},
			]
		};
		const ret = '.selector___abcd{border-color:red;}@media screen and (max-width: 992px){body{background-color:green;}}@media screen and (max-width: 768px){body{background-color:black;}}';
		assert.equal(miniCJS(CJS), ret);
	});
  });