#!/usr/bin/env node

'use strict';

let preprocessor = require('../lib/preprocessor'),
    command = require('../lib/command'),
    documentedCommands = require('../lib/constants/documentedCommands'),
    defaultConfig = require('../lib/constants/defaultConfig'),
    file = require('../lib/file');

command.parse(process.argv, (err, options, files)=> {
    if (err)
        throw new Error(err);

    files = files.map(file => __dirname + file);

    let config = defaultConfig;

    options.forEach(function (arg) {
        switch (arg) {
            case '--watch':
            case '-w':
                config.watch = true;
                break;
            case '--minify':
            case '-m':
                config.minify = true;
                break;
            case '--beautify':
            case '-b':
                config.beautify = true;
                break;
            case '--reverse':
            case '-r':
                config.reverse = true;
                break;
            case '-v':
            case '--version':
                printVersion();
                break;
            case '--help':
            case '-h':
                printUsage();
                break;
        }
    });

    if (files.length == 2)
        preprocessor.exec(files[0], files[1], config);

    console.error('Unknow command\nUse: press --help');
    process.exit(1);
});
function printVersion() {
    console.log(JSON.parse(file.readSync(__dirname + '/../package.json')).version)
    process.exit(1);
}
function printUsage() {
    console.log([
        "Usage: press <options> <source_file> <destination_file>\n",
        'Options:'
    ].concat(Object.keys(documentedCommands).map((name) => `   ${name}   \t${documentedCommands[name]}`)).join('\n'));
    process.exit(1);
}
