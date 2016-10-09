'use strict';

module.exports = {
    identifierSpe (char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '-' || char === '_' || char === '*' || char === '$' || char === '=' || char === '^' || char === '/' || char === '(' || char === ')';
    },
    identifier (char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '-' || char === '_' || char === '*';
    },
    combinator (char) {
        return char === '>' || char === '+' || char === '~' || char === ' ';
    },
    whiteEscape (char) {
        return char === ' ';
    }
};