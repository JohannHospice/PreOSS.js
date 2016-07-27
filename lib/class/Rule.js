'use strict'

var selectors = require('../constants/selectors'),
	Element = require('./Element'),
	preg = require('../preg');

module.exports = function (rule) {
	let value = [];
	if(rule)
		build(rule);

	function build(string) {
		var concat ='',
			isPregName = false
			type,
			pregName = {
				'true': preg.CSSname,
				'false': preg.CSSselector
			}
		string.forEach( (char, index) => {
			if( index == string.lenght - 1)
				rule.addElement(concat, type)
			if(preg[isPregname](char))
				concat += char;
			else{
				if(ispregname)
					rule.addElement(concat, type)
				else 
					type = concat
				isPregname = !isPregname
				concat =''
			}
		})
	}

	function addElement(type, name){
		value.push(new Element(concat, type));
	}
	function toString() {
		return value.forEach(element =>{
			return element.type+element.name
		})
	}

	return {
		build,
		addElement,
		toString,
	}
}
/*

element:{
	info
	val: {
		element:{
			info,
			val: {
				element:{
					type,
					val
				},
				element:{
					type,
					val
				}

			}
		}
	}
}

[
	{
		type: .
		name:nav
		deep: 0
	},
	{
		type: ::
		name: after
		deep: 1
	},
	{
		type: :
		name: hover
		deep: 2
	}
]
*/