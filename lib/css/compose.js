'use strict';

module.exports = {
    minify: {
        declarations(declarations) {
            function composeDeclarationBeautify(declaration) {
                return `${declaration};`;
            }

            if (declarations.constructor === Array) {
                return '{' + declarations.map(declaration=> {
                        if (typeof declaration.value === 'object')
                            return `${declaration.property} {${Object.keys(declaration.value).map(key=>composeDeclarationBeautify(key + ':' + declaration.value[key])).join('')}}`;
                        return composeDeclarationBeautify(`${declaration.property}:${declaration.value}`)
                    }).join('') + '}';
            }
            return composeDeclarationBeautify(declarations);
        },
        selector: function rec(selectorObj) {
            let string = '';
            if (selectorObj.combinator)
                string += selectorObj.combinator;
            if (selectorObj.tagName)
                string += selectorObj.tagName;
            if (selectorObj.atName)
                string += `@${selectorObj.atName}`;
            if (selectorObj.idName)
                string += `#${selectorObj.idName}`;
            if (selectorObj.classes.length > 0)
                string += selectorObj.classes.map(className => `.${className}`).join('');
            if (selectorObj.pseudos.length > 0)
                string += selectorObj.pseudos.map(pseudo => pseudo.type + pseudo.name).join('');
            if (selectorObj.attributes.length > 0)
                string += `[${selectorObj.attributes.join('][')}]`;
            if (selectorObj.expressions.length > 0)
                string += `(${selectorObj.expressions.join(')(')})`;
            if (selectorObj.next)
                string += rec(selectorObj.next);
            return string;
        },
        sheet(sheet) {
            return sheet.rules.map(rule => rule.selectors.map(this.selector).join(',') + this.declarations(rule.declarations)).join('');
        }
    },
    beautify: {
        declarations(declarations) {
            if (declarations.constructor === Array) {
                return ' {\n\t' + declarations.map(declaration=> {
                        if (typeof declaration.value === 'object')
                            return `${declaration.property} {\n\t${Object.keys(declaration.value).map(key=>`\t${key}: ${declaration.value[key]};\n\t`).join('')}}\n`;
                        return `${declaration.property}: ${declaration.value};\n`
                    }).join('\t') + '}';
            }
            return ` ${declarations};\n`;
        },
        selector: function rec(selectorObj) {
            let string = '';
            if (selectorObj.combinator)
                string += ` ${selectorObj.combinator} `;
            if (selectorObj.tagName)
                string += selectorObj.tagName;
            if (selectorObj.atName)
                string += `@${selectorObj.atName}`;
            if (selectorObj.idName)
                string += `#${selectorObj.idName}`;
            if (selectorObj.classes.length > 0)
                string += selectorObj.classes.map(className => `.${className}`).join('');
            if (selectorObj.pseudos.length > 0)
                string += selectorObj.pseudos.map(pseudo => pseudo.type + pseudo.name).join('');
            if (selectorObj.attributes.length > 0)
                string += `[${selectorObj.attributes.join('][')}]`;
            if (selectorObj.expressions.length > 0)
                string += `(${selectorObj.expressions.join(')(')})`;
            if (selectorObj.next)
                string += rec(selectorObj.next);
            return string;
        },
        sheet(sheet) {
            return sheet.rules.map(rule => rule.selectors.map(this.selector).join(', ') + this.declarations(rule.declarations)).join('\n');
        }
    },
};