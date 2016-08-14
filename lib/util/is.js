'use strict';

module.exports = {
    combinator: function(char) {
        return char === '>' || char === '+' || char === '~' || char === ' ';
    },
    ident: function(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '-' || char === '_' || char === '*' ;
    },
    identSpe: function(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '-' || char === '_' || char === '$' || char === '=' || char === '^' || char === '/' || char === '(' || char === ')';
    }
};
