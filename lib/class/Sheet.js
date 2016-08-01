'use strict';

var Rule = require('./Rule');

/**
 * @constructor
 * @param {{string}} sheet
 * @returns {{addRule: addRule, getRules: getRules, setRules: setRules, toStringBeautify: toStringBeautify, toStringMinify: toStringMinify, toString: toString}}
 */
module.exports = function (sheet) {

    /**
     * @type {{rules: Rule[]}}
     */
    let self = {
        rules: []
    };
    self.rules.clear = function () {this.splice(0,this.length)};

    if(sheet)
        setRules(sheet);


    /**
     *
     * @param {string} selector
     * @param {string[]} declarations
     */
    function addRule(selector, declarations) {
        self.rules.push(new Rule(selector, declarations));
    }

    /**
     *
     * @returns {Rule[]}
     */
    function getRules() {
        return self.rules;
    }

    /**
     * @param {string[]} rules
     */
    function setRules(rules) {
        self.rules.clear();
        Object.keys(rules).forEach(selector => addRule(selector, rules[selector]));
    }

    /**
     *
     * @returns {string}
     */
    function toStringBeautify() {
        return self.rules.map(rule => rule.toStringBeautify()).join('\n');
    }

    /**
     *
     * @returns {string}
     */
    function toStringMinify() {
        return self.rules.map(rule => rule.toStringMinify()).join('');
    }
    /**
     *
     * @returns {string}
     */
    function toString() {
        return toStringMinify();
    }

    return {
        addRule,
        getRules,
        setRules,
        toStringBeautify,
        toStringMinify,
        toString
    }
};