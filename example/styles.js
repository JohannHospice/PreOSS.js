var colors = {
        grey:[
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