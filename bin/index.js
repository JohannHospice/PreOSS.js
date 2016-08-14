#!/usr/bin/env node

'use strict';

let preprocessor = require('../lib/preprocessor'),
    command = require('../lib/util/command'),
    file = require('../lib/util/file'),
    documentedCommands = require('../lib/constants/documentedCommands'),
    defaultConfig = require('../lib/constants/defaultConfig');

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
                printNotImplemented();
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
    console.error('Need 2 arguments\nUse: preoss --help');
    process.exit(1);
}

function printUnknowCommand() {
    console.error('Unknow command\nUse: preoss --help');
    process.exit(1);
}

function printNotImplemented(argument) {
    console.error('Function not yet implemented.');
    process.exit(1);
}

function printVersion() {
    console.log(JSON.parse(file.readSync(__dirname + '/../package.json')).version)
    process.exit(1);
}

function printUsage() {
    console.log([
        'Usage: preoss <options> <input_file> <output_file>\n',
        'Description: Compile JS file to CSS.\n',
        'Options:',
    ].concat(Object.keys(documentedCommands).map(name => `\t${name}\t\t${documentedCommands[name]}`))
        .join('\n'));
    process.exit(1);
}
