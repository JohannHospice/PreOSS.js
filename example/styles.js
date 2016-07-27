var noir = '#000';

module.exports = {
	'@font-face': {
		src: 'url(../font.ttf)'
	},
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