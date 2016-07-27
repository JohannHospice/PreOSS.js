'use strict'

var selectors = require('../constants/selectors'),
	Element = require('./Element'),
	preg = require('../preg');

/**
 * An instance who parse a CSS rule name
 * state: stable
 */

module.exports = function (rule) {
	let value = [];
	if(rule)
		build(rule);

	//TODO: remake this function for better perform
	//TODO: Add the combinators
	function build(string) {
		let selector,
			concat ='',
			isPregName = false,
			pregCSS = preg.CSSselector;

		for (var index = 0; index < string.length; index++) {
			let char = string[index];
			if(char != ' ')
				if( index == string.length - 1)
					addElement(selector, concat + char)
				else
					if(pregCSS(char))
						concat += char;
					else {
						if(isPregName) {
							addElement(selector, concat);
							pregCSS = preg.CSSselector;
						}
						else{
							selector = concat;
							pregCSS = preg.CSSname;
						}
						isPregName= !isPregName;
						concat = char;
					}
		}
	}

	function addElement(type, name){
		value.push(new Element(type, name));
	}

	function toString() {
		return value.map(element => element.type + element.name).join('')
	}

	return {
		value,
		build,
		addElement,
		toString,
	}
}
