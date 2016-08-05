#!/usr/bin/env node

'use strict';

let preprocessor = require('../lib/preprocessor'),
    command = require('../lib/command'),
    documentedCommands = require('../lib/constants/documentedCommands'),
    defaultConfig = require('../lib/constants/defaultConfig'),
    file = require('../lib/file');

command.parse(process.argv, function (err, options, others) {
    if (err)
        throw new Error(err);

    let config = defaultConfig,
        paths = others.map(file => `./${file}`);

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
            default:
                printUnknowCommand();
        }
    });

    if (paths.length != 2)
        printNeedArgs();

    preprocessor.exec(paths[0], paths[1], config);
});

function printNeedArgs() {
    console.error('Need 2 arguments\nUse: press --help');
    process.exit(1);
}

function printUnknowCommand() {
    console.error('Unknow command\nUse: press --help');
    process.exit(1);
}

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
