'use strict'

var assert = require('assert'),
	Rule = require('../lib/class/Rule'),
	vars = require('./vars');

describe('Rule', function(){
	it('should build a correctly');
	it('should have a good toString result', function (done) {
		let rule = new Rule(vars.cssClassName);
		assert.equal(rule.toString(), vars.cssClassName);
		done();
	});
})