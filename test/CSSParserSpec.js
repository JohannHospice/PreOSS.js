'use strict';

var assert = require('assert'),
	Rule = require('../lib/class/Rule'),
	Selector = require('../lib/class/Selector'),
	Declaration = require('../lib/class/Declaration');

describe('CSSparser', function(){
	describe('Selector', function(){
		let selector = new Selector('.nav');
		it('should have a good minified toString', function (done) {
			assert.equal(selector.toString(), '.nav');
			done();
		});
	});

	describe('Declaration', function(){
		let declaration = new Declaration('background', '#000')
		it('should have a good minified toString', function (done) {
			assert.equal(declaration.toString(), 'background:#000');
			done();
		});
		it('should have a good beauty toString', function (done) {
			assert.equal(declaration.toStringBeautify(), 'background: #000');
			done();
		});
	})
	
	describe('Rule', function(){
		let rule = new Rule('.nav', {
			'background-color': 'red',
			position: 'absolute'
		});
		it('should have a good minified toString', function (done) {
			assert.equal(rule.toString(), ".nav{background-color:red;position:absolute}");
			done();
		});
		it('should have a good beauty toString', function (done) {
			assert.equal(rule.toStringBeautify(), ".nav {\n\tbackground-color: red;\n\tposition: absolute\n}");
			done();
		});
	})
})