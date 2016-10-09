var colors = {
        grey: [
            '#212121',
            '#424242',
            '#717171',
        ]
    },
    pow2 = val => Math.pow(2, val);

module.exports = {
    '@import' : "url('styles.js')",
    '@media(max-width: 18px)': {
        '.back': {
            'width': '18px',
            'height': '18px',
        }
    },
    'body': {
        'margin': 0,
        'padding': 25 + 'px'
    },
    '#link > a[target]': {
        'background-color': colors.grey[0],
        'height': `${pow2(8)}px`,
        'width': 'auto',
    },
    '.nested,.item': {
        'color': '#333',
    },
    'a': {
        'color': 'red'
    },
    'a:hover': {
        'text-align': 'center',
        'opacity': '0'
    },
    'a::after': {
        'content': "''",
        'position': 'absolute',
        'top': 0
    }
}