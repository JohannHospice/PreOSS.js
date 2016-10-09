'use strict';

/**
 * Object command parser
 * @type {{parse: function()}}
 */
module.exports = {
    /**
     * @param {string[]} args
     * @param {function(string, string[], string[])} callback
     */
    parse: function (args, callback) {
        let err = null,
            options = [],
            others = [];

        args.slice(2).forEach(function(arg){
            if(/^(-\w|--\w*)$/.test(arg))
                options.push(arg);
            else 
                others.push(arg)
        });
        
        callback(err, options, others);
    }
};