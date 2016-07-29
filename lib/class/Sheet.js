var Rule = require('./lib/class/Rule');

module.exports = function (sheet) {

    let self = {
        rules: []
    };

    if(sheet)
        build(sheet);

    function build(sheet) {
        Object.keys(sheet).forEach(function (selector) {
            addRule(selector, sheet[selector]);
        })
    }

    function addRule(selector, declarations) {
        self.rules.push(new Rule(selector, declarations));
    }

    function setRules(rules) {
        self.rules = rules;
    }

    function getRules() {
        return self.rules;
    }

    function toStringBeauty() {
        return self.rules.map(rule => rule.toStringBeauty()).join('\n');
    }

    function toString() {
        return self.rules.map(rule => rule.toString()).join('');
    }
    return {
        build,
        addRule,
        getRules,
        setRules,
        toStringBeauty,
        toString
    }
};