'use strict';

var file = require('./file'),
    Sheet = require('./class/Sheet');

module.exports = {
    exec: function (source, destination, config) {
        let sheet = new Sheet(require(`../${source}`));
        let toString = config.beautify && !config.minify ? sheet.toStringBeautify : sheet.toStringMinify,
            writeFile = ()=>
                file.write(destination, toString(), function (err) {
                    if (err)
                        throw new Error(err);
                });
        if (config.watch)
            file.watch(source, function (err) {
                if (err)
                    throw new Error(err);
                console.log('reload');
                debugger
                sheet.setRules(require(`../${source}`));
                console.log(toString());
                writeFile();
            });
        else
            writeFile();
    }
};