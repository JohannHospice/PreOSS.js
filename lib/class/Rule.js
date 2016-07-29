'use strict'

var Declaration = require('./Declaration'),
	Selector = require('./Selector');

/**
 * An instance who contain a CSS rule.
 */
module.exports = function (selector, declarations) {
	
	let self = {
		selector: null,
		declarations: null
	};

	if(selector && declarations)
		build(selector, declarations);
	else{
		if(!selector)
			self.selector = new Selector();
		if(!declarations)
			self.declarations = [];
	}
	
	//TODO: add nested
	function build(selector, declarations) {
		setSelector(selector);
		setDeclarations(declarations);
	}
	
	function addDeclaration(property, value) {
		self.declarations.push(new Declaration(property, value));
	}

	function setDeclarations(declarations) {
		self.declarations = [];
		Object.keys(declarations).forEach(property => addDeclaration(property, declarations[property]));
	}

	function setSelector(selector) {
		self.selector = new Selector(selector);
	}

	function getSelector() {
		return self.selector;
	}
	
	function getDeclarations() {
		return self.declarations;
	}

	function toStringBeauty() {
		return `${self.selector.toStringBeauty()} {\n\t${self.declarations.map(declaration => declaration.toStringBeauty()).join(';\n\t')}\n}`;
	}

	function toString() {
		return `${self.selector.toString()}{${self.declarations.map(declaration => declaration.toString()).join(';')}}`;
	}

	return {
		addDeclaration,
		setDeclarations,
		setSelector,
		getDeclarations,
		getSelector,
		toStringBeauty,
		toString
	}
}
