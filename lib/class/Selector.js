'use strict'

var preg = require('../preg');

/**
 * An instance who parse a CSS selector name
 */

module.exports = function (selector) {
	
	let self = {
		elements: []
	}

	if(selector)
		build(selector);

	//TODO: remake this function for better perform
	//TODO: Add the combinators, and group
	function build(selector) {
		let attribute,
			concat ='',
			isPregName = false,
			pregCSS = preg.CSSattribute;

		for (var index = 0; index < selector.length; index++) {
			let char = selector[index];
			if(char != ' ')
				if( index == selector.length - 1)
					addElement(attribute, concat + char)
				else
					if(pregCSS(char))
						concat += char;
					else {
						if(isPregName) {
							addElement(attribute, concat);
							pregCSS = preg.CSSattribute;
						}
						else{
							attribute = concat;
							pregCSS = preg.CSSname;
						}
						isPregName= !isPregName;
						concat = char;
					}
		}
	}

	function addElement(attribute, name){
		self.elements.push({attribute, name});
	}

	function getElements() {
		return self.elements;
	}
	
	function setElements(elements) {
		self.elements = elements;
	}

	function toStringBeauty(){
		return toString();
	}
	
	function toString() {
		return self.elements.map(element => element.attribute + element.name).join('');
	}

	return {
		build,
		addElement,
		getElements,
		setElements,
		toStringBeauty,
		toString,
	}
}
