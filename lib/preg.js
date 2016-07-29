'use strict'
/**
 * Object that contain regex
 */
module.exports = {
	CSSname: string => /^[a-zA-Z0-9_-]+$/.test(string),
	CSSattribute: string => /^[.@#:]+$/.test(string)
}