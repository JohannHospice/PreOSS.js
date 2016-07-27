'use strict'

module.exports = function (type, name) {
	if(!type&& !name)
		throw new Error('Element instance need 2 arguments');
	return {
		type,
		name
	}
}