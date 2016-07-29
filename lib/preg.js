'use strict'
/**
 * Object that contain regex
 * @type {{CSSname: ((p1?:*)=>boolean), CSSattribute: ((p1?:*)=>boolean)}}
 */
module.exports = {
	CSSname: string => /^[a-zA-Z0-9_-]+$/.test(string),
	CSSattribute: string => /^[.@#:]+$/.test(string)
};