var Rule = require('./Rule');

/**
 * @constructor
 * @param {string} sheet
 * @returns {{build: build, addRule: addRule, getRules: getRules, setRules: setRules, toStringBeautify: toStringBeautify, toString: toString}}
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
        build(sheet);

    /**
     * generate an entire stylesheet
     * @param {Object} sheet
     */
    function build(sheet) {
        Object.keys(sheet).forEach(function (selector) {
            addRule(selector, sheet[selector]);
        })
    }

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
    function toString() {
        return self.rules.map(rule => rule.toString()).join('');
    }
    return {
        build,
        addRule,
        getRules,
        setRules,
        toStringBeautify,
        toString
    }
};