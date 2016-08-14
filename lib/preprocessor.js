'use strict';

var file = require('./util/file'),
    Sheet = require('./class/Sheet'),
    reload = require('require-reload')(require);

function write(file, data, message) {
    file.write(file, data, function (err) {
        if (err)
            throw new Error(err);
        console.log(message)
    });
}

module.exports = {
    exec: function (source, destination, config) {
        let sheet = new Sheet(),
            relativeSource = `../${source}`;

        let toString = config.beautify && !config.minify ? sheet.toStringBeautify : sheet.toStringMinify;

        if (config.watch)
            file.watch(source, (err) => {
                if (err)
                    throw new Error(err);
                try {
                    sheet.setRules(reload(relativeSource));
                    write(destination, toString(), 'reload');
                }
                catch(err) { console.error(err) }
            });
         else{
            sheet.setRules(require(relativeSource));
            write(destination, toString(), 'success');
        }
    }
};