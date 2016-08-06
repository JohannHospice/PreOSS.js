'use strict'

var assert = require('assert'),
	preg = require('../lib/preg');
describe('Preg', function(){
	it('should correctly test a CSS name', function (done) {
		assert.equal(preg.CSSname('link'), true);
		assert.equal(preg.CSSname('col-xs'), true);
		assert.equal(preg.CSSname('.name'), false);
		assert.equal(preg.CSSname('name#'), false);
		done();
	})
})