'use strict';

var file = require('./util/file'),
    parser = require('./css/parse'),
    composer = require('./css/compose'),
    reload = require('require-reload')(require);

module.exports = {
    parse(source, destination, beautify) {
        let sheet = parser.sheet(require(`../${source}`));
        write(destination, beautify ? composer.beautify.sheet(sheet) : composer.minify.sheet(sheet), 'success');
    },
    parseWatch(source, destination, beautify) {
        file.watch(source, (err) => {
            if (err)
                throw new Error(err);
            try {
                let sheet = parser.sheet(reload(`../${source}`));
                write(destination, beautify ? composer.beautify.sheet(sheet) : composer.minify.sheet(sheet), 'reload');
            }
            catch (err) {
                console.error(err)
            }
        });
    }
};
function write(destination, data, message) {
    file.write(destination, data, function (err) {
        if (err)
            throw new Error(err);
        console.log(message)
    });
}