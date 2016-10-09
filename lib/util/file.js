var fs = require('fs'),
    encodage = 'utf8';
/**
 * Object file handler
 * @type {{exist: {function()}, read: {function()}, write: {function()}, watch: {function()}}}
 */
module.exports = {
    /**
     *
     * @param {string} path
     * @param {function(string)} callback
     */
    exist: function (path, callback) {
        fs.access(path, callback);
    },
    /**
     *
     * @param {string} path
     * @param {function(string, string)} callback
     */
    read: function (path, callback) {
        this.exist(path, (err)=> {
            if (err)
                callback(err, null);
            else
                fs.readFile(path, encodage, callback);
        })
    },
    /**
     *
     * @param {string} path
     * @return {function(string, string)}
     */
    readSync: function(path) {
        return fs.readFileSync(path, encodage);
    },
    /**
     *
     * @param {string} path
     * @param {string} data
     * @param {function(string, string)} callback
     */
    write: function (path, data, callback) {
        fs.writeFile(path, data, encodage, callback);
    },
    /**
     *
     * @param {string} path
     * @param {function(string, string, string)} callback
     */
    watch: function (path, callback) {
        this.exist(path, (err)=> {
            if (err)
                callback(err, null, null);
            else
                fs.watchFile(path, (curr, prev) => {
                    if (curr.mtime > prev.mtime)
                        callback(null, curr, prev);
                });
        })
    }
};
