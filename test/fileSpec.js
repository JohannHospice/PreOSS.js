'use_strict'

var assert = require('assert'),
	file = require('../lib/file');

describe('File', function(){

	it('should exist', function (done) {
		file.exist('example/styles.js', done);
	});

	it('should be read', function (done) {		
		file.read('example/styles.js', done);
	});

	it('should be writen', function (done){
		file.write('hello.world', 'hello world', done);
	});
	
	it.skip('should be watched', function (done) {
		file.watch('/', done);
	});
})