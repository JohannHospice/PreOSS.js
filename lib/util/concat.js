"use strict";

var is = require('./is');

module.exports = {
    doConcat: function (str, index, test, callback) {
        let value = '';
        do {
            value += str[index];
            index++;
        } while (test(str[index]));
        callback(value, index);
    },
    combinator: function (str, index, callback) {
        if (is.combinator(str[index]))
            callback(str[index], index + 1);
    },
    basic: function (str, index, callback) {
        if (is.ident(str[index]))
            this.doConcat(str, index, is.ident, (value, index) => callback(value, index));
    },
    at: function (str, index, callback) {
        if (str[index] == '@') {
            index++;
            this.doConcat(str, index, is.ident, (value, index) => callback(value, index));
        }
    },
    id: function (str, index, callback) {
        if (str[index] == '#') {
            index++;
            this.doConcat(str, index, is.ident, (value, index) => callback(value, index));
        }
    },
    class: function (str, index, callback) {
        if (str[index] == '.') {
            index++;
            this.doConcat(str, index, is.ident, (value, index) => callback(value, index));
        }
    },
    attr: function (str, index, callback) {
        if (str[index] == '[') {
            index++;
            this.doConcat(str, index, is.identSpe, (value, index) => callback(value, index + 1));
        }
    },
    pseudo: function (str, index, callback) {
        if (str[index] == ':') {
            let value = {type: ':'};
            index++;
            if (str[index] == ':') {
                value.type += ':';
                index++;
            }
            this.doConcat(str, index, is.identSpe, (name, index) => {
                value.name = name;
                callback(value, index)
            });
        }
    },
};
