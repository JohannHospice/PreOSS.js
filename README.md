# PreOSS.js
[![Travis branch](https://img.shields.io/travis/JohannHospice/PreOSS.js.svg?style=flat-square)](https://travis-ci.org/JohannHospice/PreOSS.js)
[![npm](https://img.shields.io/npm/l/preoss.svg?style=flat-square)](http://spdx.org/licenses/BSD-3-Clause)
A JS preprocessor for CSS 

## Features
* Minify or beautify output files 
* Support multiples CSS selectors:
	* basics: ID, class and type
	* pseudo-elements
	* pseudo-classes
* Live preprossessing (hot-reloading)

## To do
* Add selectors
	* basics: universal and attribute
	* combinators 
* convert a css file to a js file
* others (soon explain)

## Work
Based on [CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors) 
Inspired by [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) and [React-native](http://facebook.github.io/react-native/)
 
## Installation
```bash
$ npm install -g preoss
```

## Usage
```bash
$ preoss <option> <input_file> <output_file>
```
Options|Descriptions
:-:|:-:
-h, --help|output usage information
-v, --version|output the version number
-m, --minify|minify the CSS output
-b, --beautify|beautify the CSS output
-w, --watch|watch file for changes
-r, --reverse|compile CSS to JS file

## Tests
```bash
$ npm test
```

## Example
Use the simple command:
```bash
$ preoss styles.js styles.css
```
will compile your javascript source file:
```javascript
var colors = {
        grey: [
            '#212121',
            '#424242',
            '#717171',
        ]
    },
    pow2 = val => Math.pow(2, val);

module.exports = {
    '@font-face': {
        src: "url('../font/font.ttf')"
    },
    body: {
        margin: 0,
        padding: 15+'px'
    },
    '#link': {
        'background-color': colors.grey[1],
        height: `${pow2(8)}px`,
        width: 'auto',
    },
    '.nested': {
        color: '#333',
    },
    a: {
        color: 'red'
    },
    'a:hover': {
        'text-align': 'center',
        opacity: '0'
    },
    'a::after': {
        content: "''",
        position: 'absolute',
        top: 0
    }
}
```
to produce your css file:
```css
@font-face {
	src: url('../font/font.ttf')
}
body {
	margin: 0;
	padding: 15px
}
#link {
	background-color: #424242;
	height: 256px;
	width: auto
}
.nested {
	color: #333
}
a {
	color: red
}
a:hover {
	text-align: center;
	opacity: 0
}
a::after {
	content: '';
	position: absolute;
	top: 0
}
```

## License
Copyright 2016 Johann Hospice. Licensed under [BDS 3 licensed](./LICENSE.txt)
