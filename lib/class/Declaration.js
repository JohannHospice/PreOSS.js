'use strict'

/*
 *	An instance who contain a CSS declaration
 */
module.exports = function (property, value) {
	if(!property&& !value)
		throw new Error('Element instance need 2 arguments');
	
	let self = {
		property,
		value
	}
	
	function setProperty(property) {
		self.property = property;
	}
	
	function setValue(value) {
		self.value = value;
	}

	function getProperty() {
		return self.property;
	}
		
	function getValue() {
		return self.value;
	} 

	function toStringBeauty() {
		return `${self.property}: ${self.value}`;
	}
	
	function toString() {
		return `${self.property}:${self.value}`;
	}
	
	return {
		setProperty, 
		setValue,
		getProperty, 
		getValue,
		toStringBeauty,
		toString,
	}
}