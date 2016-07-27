'use strict'

module.exports = {
	CSSname: string => /^[a-zA-Z0-9_-]+$/.test(string),
	CSSselector: string => /^[.@#:]+$/.test(string)
}