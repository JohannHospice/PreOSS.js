'use_strict'

var file = require('./file'),
	Rule = require('./class/Rule');

module.exports ={
	exec: function(source, destination, callback){
		var styles = require(`../${source}`);

		this.parser(styles, function(rule, value){

		});
	},
	parser: function (rules, callback) {
		Object.keys(rules).forEach( name => callback(new Rule(name), rules[name]) );
	},
}

/*
body {
	color: 0
}
*/