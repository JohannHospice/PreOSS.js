'use strict';

module.exports = {
    getEscapeSpace: function (str, index) {
        while (str[index] === ' ') index++;
        return index;
    }
};