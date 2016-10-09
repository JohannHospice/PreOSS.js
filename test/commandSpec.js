'use strict';
var assert = require('assert'),
    command = require('../lib/util/command');

describe('command', function () {
    it('should be parse correctly', function (done) {
        command.parse(
        	['node', './../index', '--watch', 'styles/js/index.js', 'styles/css/styles.css'],
        	function (err, options, others) {
		        assert.deepEqual(options, ['--watch']);
		        assert.deepEqual(others, ['styles/js/index.js', 'styles/css/styles.css']);
		        done()
		    }
	    );
    })
})