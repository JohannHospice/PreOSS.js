'use strict'

var selectors = require('../constants/selectors'),
	Element = require('./Element'),
	Rule = require('./Rule');

/**
 * A instance who contain an entire CSS rule ( like body { margin: 0 } ).
 * state: unstable
 */
module.exports = function (couple) {
	let value = [];
	if(couple)
		build(couple);

	//TODO: add nested
	function build(couple) {		
		value.push(getBuildCouple(couple, obj[couple]));
	}
	function getBuildCouple(rule, properties) {
		rule = new Rule(rule);
		properties = Object.keys(properties).map(property => new Element(property, properties[property]))
		return {
			rule,
			properties
		}
	}

	function toString() {
		return value.map(couple => couple.rule.toString() + ': {\n' + couple.properties.map(key => key).join(',\n') + '}').join('\n');
	}

	return {
		value,
		toString
	}
}
