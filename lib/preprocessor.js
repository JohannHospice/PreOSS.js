'use_strict'

var file = require('./file'),
	selectors = require('./selectors') 

module.exports ={
	exec: function(source, destination, callback){
		var styles = require(`../${source}`);
		Object.keys(styles).forEach( name => {
			let firstChar = name[0];
			let selector = selectors.basics.find( val => val == firstChar)
		});
	}
}