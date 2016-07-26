var assert = require('assert'),
	preprocessor = require('../lib/preprocessor'),
	vars = require('./vars')

describe('Preprocess', function () {
	it('should exec', function (done) {
		preprocessor.exec(vars.filepathExist,'example/test', done)
	})
})