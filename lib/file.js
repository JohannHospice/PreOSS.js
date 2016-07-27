var fs = require('fs'),
	encodage = 'utf8';
/**
 * Object for handle files
 */
module.exports = {
	exist: function (path, callback) {
		fs.access(path, callback);
	},
	read: function (path, callback) {
		this.exist(path, (err)=>{
			if(err) 
				callback(err, null);
			else
				fs.readFile(path, encodage, callback);
		})
	},
	write: function (path, data, callback) {
		fs.writeFile(path, data, encodage, callback);
	},
	watch: function (path, onUpdate, callback) {
		this.exist(path, (err)=>{
			if(err) 
				callback(err, null, null);
			else {
				var watchCallback = onUpdate 
					?(err, curr, prev) => {
						if (curr.mtime > prev.mtime)
							callback(err, curr, prev);
					}
					:callback;
				fs.watch(path, (curr, prev) => watchCallback(null, curr, prev));
			}
		})
	}
}