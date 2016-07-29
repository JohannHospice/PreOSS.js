var noir = '#000',
    pow2 = val => Math.pow(2, val);

module.exports = {
    '@font-face': {
        src: 'url(../font.ttf)'
    },
    body: {
        margin: 0
    },
    '#link': {
        'background-color': noir,
        height: pow2(2)
    },
    '.nested': {
        color: '#333',
    },
    a: {
        color: 'red'
    },
    'a:hover': {
        opacity: 'transparent'
    },
    'a::after': {
        content: "''",
        position: 'absolute',
        top: 0
    }
}