'use_strict'

var assert = require('assert'),
	file = require('../lib/file'),
	vars = require('./vars.js');

describe('File', function(){

	it('should exist', function (done) {
		file.exist(vars.filepathExist, done);
	});

	it('should be read', function (done) {		
		file.read(vars.filepathExist, done);
	});

	it('should be writen', function (done){
		file.write('hello.world', 'hello world', done);
	});
	
	it.skip('should be watched', function (done) {
		file.watch(vars.filepathNotExist, done);
	});
})