'use strict';

var regex = require('../regex');

/**
 *
 * @param selector
 * @returns {{build: build, addElement: addElement, getElements: getElements, setElements: setElements, toStringBeautify: toStringBeautify, toString: toString}}
 */
module.exports = function (selector) {

	let self = {
		elements: []
	};

	self.elements.clear = function () {this.splice(0,this.length)};

	if(selector)
		build(selector);

	//TODO: remake this function for better perform
	//TODO: Add the combinators, and group
	/**
	 * @param {string} selector
     */
	function build(selector) {
		let attribute = '',
			concat ='',
			isRegexName = false,
			regexCSS = regex.CSSattribute;

		for (var index = 0; index < selector.length; index++) {
			let char = selector[index];
			if(char != ' ')
				if( index == selector.length - 1)
					addElement(attribute, concat + char)
				else
					if(regexCSS(char))
						concat += char;
					else {
						if(isRegexName) {
							addElement(attribute, concat);
							regexCSS = regex.CSSattribute;
						}
						else{
							attribute = concat;
							regexCSS = regex.CSSname;
						}
						isRegexName= !isRegexName;
						concat = char;
					}
		}
	}

	/**
	 * @param {string} attribute
	 * @param {string} name
     */
	function addElement(attribute, name){
		self.elements.push({attribute, name});
	}

	/**
	 *
	 * @returns {string[]}
     */
	function getElements() {
		return self.elements;
	}

	/**
	 *
	 * @param {string[]} elements
     */
	function setElements(elements) {
		self.elements = elements;
	}

	/**
	 *
	 * @returns {string}
     */
	function toStringBeautify(){
		return toString();
	}

    /**
     *
     * @returns {string}
     */
    function toStringMinify(){
        return toString();
    }

	/**
	 *
	 * @returns {string}
     */
	function toString() {
		return self.elements.map(element => element.attribute + element.name).join('');
	}

	return {
		build,
		addElement,
		getElements,
		setElements,
		toStringBeautify,
        toStringMinify,
		toString,
	}
};