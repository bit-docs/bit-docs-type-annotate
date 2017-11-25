var tnd = require('./typeNameDescription'),
	assert = require('assert');

	
describe("documentjs/tags/helpers/typeNameDescription",function(){;
	
	it("has a function in it", function(){
		
		var res = tnd("@constructor documentjs/tags/function @function");
		
		assert.equal(res.name, "documentjs/tags/function")
		
	});
	
	it("ignore name", function(){
		var res = tnd("@constructor {Type} description", true);
		
		assert.equal(res.description, "description")
	});
	
	it("handles () in description (#168)", function(){
		var res = tnd("@foo name \\(E\\)");
		assert.equal(res.description, "(E)");
		
	});

	it("description with 'function' in it", function(){
		var res = tnd("@module {function} can-util/js/is-function/is-function is-function");

		assert.equal(res.description, 'is-function');
		assert.equal(res.name, 'can-util/js/is-function/is-function');
	});
	
	/*test("has a function in it", function(){
		
		var res = tnd("@param {String} \... description");
		deepEqual(res,{
			types: [{name: "String"}],
			name: "...",
			description: "description",
			variable: true
		});
		
	})*/
	
});
