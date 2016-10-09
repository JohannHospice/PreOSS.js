module.exports = {
    documentedCommands: {
        '-h, --help': 'output usage information',
        '-v, --version': 'output the version number',
        '-m, --minify': 'minify the CSS output',
        '-b, --beautify': 'beautify the CSS output',
        '-w, --watch': 'watch file for changes',
        '-r, --reverse': 'compile CSS to JS file',
    },
    defaultConfig: {
        watch: false,
        beautify: true,
        reverse: false
    },
};