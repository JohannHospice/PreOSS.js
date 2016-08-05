'use strict';

var file = require('./file'),
    Sheet = require('./class/Sheet'),
    reload = require('require-reload')(require);

module.exports = {
    exec: function (source, destination, config) {
        let sheet = new Sheet();

        let toString = config.beautify && !config.minify ? sheet.toStringBeautify : sheet.toStringMinify,
            writeFile = (message) =>
                file.write(destination, toString(), function (err) {
                    if (err)
                        throw new Error(err);
                    console.log(message)
                });

        if (config.watch)
            file.watch(source, function (err, curr, prev) {
                if (err)
                    throw new Error(err);
                try{
                    sheet.setRules(reload(`../${source}`));
                    writeFile('reload');
                }
                catch(e){
                    console.error(e)
                }
            });
         else{
            sheet.setRules(require(`../${source}`));
            writeFile('success');
        }
    }
};