'use strict'
var assert = require('assert'),
	Element = require('../lib/class/Element')

describe('Element', function(){
	it('should instancify', function (done) {
		let rule = new Element('.', 'nav-bar', 0)
		assert.equal(rule.type, '.')
		assert.equal(rule.value, 'nav-bar')
		assert.equal(rule.priority, 0)
		done();
	});
})