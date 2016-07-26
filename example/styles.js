var noir = '#000'
module.exports = {
	body: {
		margin: 0
	},
	'#link': {
		'background-color': noir,
		height: 8+4
	},
	'.nested': {
		color: '#333',
		a: {
			color: 'red'
		},
		'a:hover': {
			opacity: 'transparent'
		}
	},
	'a::after': {
		content:''
	}
}

/*
//result

body {
	margin: 0
}
.link {
	background-color: #000,
	height: 12
}
.nested {
	color: #333
}
.nested > a {
	color: red
}
.nested > a:hover {
	opacity: transparent
}
a::after {
	content: ''
}
*/

/*
['.','#','']element {
	attribute: string,
	['>','+','~','']element: {} 
}
*/