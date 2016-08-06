'use strict';

var Declaration = require('./Declaration'),
	Selector = require('./Selector');

/**
 * An instance who contain a CSS rule.
 * @param {string} selector
 * @param {string[]} declarations
 * @returns {{addDeclaration: addDeclaration, setDeclarations: setDeclarations, setSelector: setSelector, getDeclarations: getDeclarations, getSelector: getSelector, toStringBeautify: toStringBeautify, toString: toString}}
 */
module.exports = function (selector, declarations) {

    /**
	 *
	 * @type {{selector: Selector, declarations: Declaration[]}}
     */
	let self = {
		selector: new Selector(),
		declarations: []
	};
	self.declarations.clear = function () {this.splice(0,this.length)};

	if(selector && declarations)
		build(selector, declarations);

    /**
     * TODO: add nested
     * @param selector
     * @param declarations
     */
    function build(selector, declarations) {
        setSelector(selector);
        setDeclarations(declarations);
    }

	/**
	 * @param {string} property
	 * @param {string} value
     */
	function addDeclaration(property, value) {
		self.declarations.push(new Declaration(property, value));
	}

    /**
     * @param {string[]} declarations
     */
    function setDeclarations(declarations) {
        self.declarations.clear();
        Object.keys(declarations).forEach(property => addDeclaration(property, declarations[property]));
    }

    /**
     * @param {string} selector
     */
	function setSelector(selector) {
		self.selector.build(selector);
	}

    /**
     * @returns {Selector}
     */
	function getSelector() {
		return self.selector;
	}

    /**
     * @returns {Declaration[]}
     */
	function getDeclarations() {
		return self.declarations;
	}

	/**
	 * @returns {string}
     */
	function toStringBeautify() {
		return `${self.selector.toStringBeautify()} {\n\t${self.declarations.map(declaration => declaration.toStringBeautify()).join(';\n\t')}\n}`;
	}

	/**
	 * @returns {string}
     */
	function toStringMinify() {
		return `${self.selector.toStringMinify()}{${self.declarations.map(declaration => declaration.toStringMinify()).join(';')}}`;
	}

    /**
     * @returns {string}
     */
    function toString() {
        return toStringMinify();
    }

	return {
		addDeclaration,
		setDeclarations,
		setSelector,
		getDeclarations,
		getSelector,
        toStringBeautify,
        toStringMinify,
		toString
	}
};