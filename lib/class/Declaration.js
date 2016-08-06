'use strict';

/**
 *
 * @param {string} property
 * @param {string} value
 * @returns {{setProperty: setProperty, setValue: setValue, getProperty: getProperty, getValue: getValue, toStringBeautify: toStringBeautify, toStringMinify: toStringMinify, toString: toString}}
 */
module.exports = function (property, value) {
	if(!property&& !value)
		throw new Error('Element instance need 2 arguments');
	
	let self = {
		property,
		value
	};

	/**
	 * @param {string} property
     */
	function setProperty(property) {
		self.property = property;
	}

	/**
	 * @param {string} value
     */
	function setValue(value) {
		self.value = value;
	}

	/**
	 * @returns {string}
     */
	function getProperty() {
		return self.property;
	}

	/**
	 * @returns {string}
     */
	function getValue() {
		return self.value;
	}

	/**
	 * @returns {string}
     */
	function toStringBeautify() {
		return `${self.property}: ${self.value}`;
	}

	/**
	 * @returns {string}
     */
	function toStringMinify() {
		return `${self.property}:${self.value}`;
	}

	/**
	 * @returns {string}
     */
	function toString() {
		return toStringMinify();
	}

	return {
		setProperty, 
		setValue,
		getProperty, 
		getValue,
		toStringBeautify,
		toStringMinify,
		toString,
	}
}