'use strict';

let is = require('./../util/is');

module.exports = {
    selectors(selectorsStr) {
        function parseSelector(selectorsStr) {
            let index = 0;
            function concat(test) {
                let value = '';
                do value += selectorsStr[index++]; while (test(selectorsStr[index]));
                return value;
            }
            function parseSelectorAux(selectorCur) {
                if (index >= selectorsStr.length)
                    return selectorCur;
                if (is.combinator(selectorsStr[index])) {
                    let combinator = selectorsStr[index];
                    do index++; while (selectorsStr[index] === ' ');
                    if (is.combinator(selectorsStr[index])) {
                        combinator = selectorsStr[index];
                        do index++; while (selectorsStr[index] === ' ');
                    }
                    selectorCur.next = parseSelectorAux({
                        expressions: [],
                        attributes: [],
                        pseudos: [],
                        classes: [],
                        combinator
                    });
                }
                if (is.identifier(selectorsStr[index]))
                    selectorCur.tagName = concat(is.identifier);
                if (selectorsStr[index] === '.') {
                    index++;
                    selectorCur.classes.push(concat(is.identifier));
                }
                if (selectorsStr[index] === '#') {
                    index++;
                    selectorCur.idName = concat(is.identifier);
                }
                if (selectorsStr[index] == '@') {
                    index++;
                    selectorCur.atName = concat(is.identifier);
                }
                if (selectorsStr[index] === '[') {
                    index++;
                    selectorCur.attributes.push(concat(char => char !== ']'));
                    index++;
                }
                if (selectorsStr[index] === '(') {
                    index++;
                    selectorCur.expressions.push(concat(char => char !== ')'));
                    index++;
                }
                if (selectorsStr[index] === ':') {
                    let pseudo = {type: ':'};
                    index++;
                    if (selectorsStr[index] === ':') {
                        pseudo.type += ':';
                        index++;
                    }
                    pseudo.name = concat(is.identifierSpe);
                    selectorCur.pseudos.push(pseudo);
                }
                return parseSelectorAux(selectorCur);
            }

            return parseSelectorAux({
                expressions: [],
                attributes: [],
                pseudos: [],
                classes: []
            });
        }

        return selectorsStr.split(',').map(parseSelector);
    },
    declarations(declarationsObj) {
        return Object.keys(declarationsObj).map(property => ({property, value: declarationsObj[property]}));
    },
    sheet(sheet) {
        return {
            rules: Object.keys(sheet).map(selectorsStr =>({
                selectors: this.selectors(selectorsStr),
                declarations: typeof sheet[selectorsStr] == 'object' ? this.declarations(sheet[selectorsStr]) : sheet[selectorsStr]
            }))
        };
    }
};